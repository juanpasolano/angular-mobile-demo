/*
*  ANGULAR / TOPCOAT BOILERPLATE
*  Author: Juan Pablo Solano.
 */

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'google-maps']);

app.config(function($routeProvider){

	$routeProvider
		.when('/login', {
			templateUrl: 'partials/login/login.html',
			controller: 'LoginController'
		})
		.when('/login/recover', {
			templateUrl: 'partials/login/recover.html',
			controller: 'RecoverController'
		})
		.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/tradings', {
			templateUrl: 'partials/page.html',
			controller: 'PageController'
		})
		.when('/listview', {
			templateUrl: 'partials/listview/listview.html',
			controller: 'ListViewController'
		})
		.when('/map', {
			templateUrl: 'partials/map.html',
			controller: 'MapDemoController'
		})
		.otherwise({
			redirectTo:'/login'
		});
});



app.controller('MainController', function($scope, $element, ConfigFactory){
	$scope.config = ConfigFactory;

	/*This functions helps us keep track of the resize*/
	$scope.getWidth = function() {
		return $(window).width();
	};
	$scope.getHeight = function() {
		return $(window).height();
	};
	$scope.$watch($scope.getWidth, function(newValue, oldValue) {
		$scope.window_width = newValue;
	});
	$scope.$watch($scope.getHeight, function(newValue, oldValue) {
		$scope.window_height = newValue;
	});
	window.onresize = function(){
		$scope.$apply();
	};

  $scope.contentStyles = function(){
      var contentH = $scope.window_height;
      var contentTop = 0;
      if($scope.config.hasFooter){
          contentH -= $element.find('#footer').outerHeight();
      }
      if($scope.config.hasHeader){
          var headerH = $element.find('#header').outerHeight();
          contentH -= headerH;
          contentTop = headerH;
      }
      return  'height:' + contentH + 'px; top:' + contentTop + 'px';
  };

	$scope.toggleSideNav = function(){
		$element.find('#wrapper').toggleClass('open');
	};
});


app.factory('ConfigFactory', function(){
	return {
		server: {
			services: 'http://192.237.180.31/dhm/public/api/',
			assets: 'http://192.237.180.31/dhm/public/'
		},
		title : 'Angular boilerplate from factory',
		hasFooter: false,
		hasHeader:false,
		hasSideNavigation: false,
		loadingPopOver:false
	};
});


/*
* HomeController.js
*/
app.controller('HomeController', function($scope, $rootScope, ConfigFactory){
	ConfigFactory.title = 'Angular boilerplate';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;
	ConfigFactory.hasSideNavigation = true;

	$scope.emitToast = function(){
		$rootScope.$emit('makeToast', [{title:'This is an emmited toast', type:'success'}]);
	};
	$scope.showLoading = function(){
		ConfigFactory.loadingPopOver = true;
		console.log(ConfigFactory.loadingPopOver);
	};
});
/*
 * MapController.js
 */
app.controller('MapDemoController', function($scope, $log, ConfigFactory, StoresModel){
	ConfigFactory.title = 'Map demo';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;

	onMarkerClicked = function(marker){
		marker.showWindow = true;
		window.alert("Marker: lat: " + marker.latitude +", lon: " + marker.longitude + " clicked!!")
	};

	$scope.map = {
		center: {
			latitude: 4.703380,
			longitude: -74.04208883
		},
		options: {
			streetViewControl: false,
				panControl: false
		},
		zoom: 12,
			dragging: false,
			bounds: {},
		markers: [
			{
				latitude: 45,
				longitude: -74,
				showWindow: false,
				title: 'Marker 2'
			},
			{
				latitude: 15,
				longitude: 30,
				showWindow: false,
				title: 'Marker 2'
			},
			{
				latitude: 37,
				longitude: -122,
				showWindow: false,
				title: 'Plane'
			}
		],
		dynamicMarkers : [],
		clickedMarker: {
			title: 'You clicked here',
			latitude: null,
			longitude: null
		},
		events: {
			click: function (mapModel, eventName, originalEventArgs) {
				// 'this' is the directive's scope
				$log.log("user defined event: " + eventName, mapModel, originalEventArgs);

				var e = originalEventArgs[0];

				if (!$scope.map.clickedMarker) {
					$scope.map.clickedMarker = {
						title: 'You clicked here',
						latitude: e.latLng.lat(),
						longitude: e.latLng.lng()
					};
				}
				else {
					$scope.map.clickedMarker.latitude = e.latLng.lat();
					$scope.map.clickedMarker.longitude = e.latLng.lng();
				}

				$scope.$apply();
			}
		},
		infoWindow: {
			coords: {
				latitude: 30,
				longitude: -89
			},
			show: false
		},
		templatedInfoWindow: {
			coords: {
				latitude: 60,
				longitude: -95
			},
			show: true,
				templateUrl: 'templates/info.html',
				templateParameter: {
				message: 'passed in from the opener'
			}
		}
	}

	/*$.each($scope.map.markers,function(marker){
		marker.closeClick = function(){
			marker.showWindow = false;
			$scope.$apply();
		};
		marker.onClicked = function(){
			onMarkerClicked(marker);
		};
	});  */

	$scope.onMarkerClicked = onMarkerClicked



	//http://192.237.180.31/dhm/public/assets/img/stores/7_thumbnail.jpg
	var storesSuccess = function(data, status){
		var branches = data[0].branches;
		var newMarkers = []
		for(var i = 0; i < branches.length-100; i++){
			console.log(i + ' : ' +branches[i].lat + ',' + branches[i].lng );
			newMarkers.push({
				latitude:branches[i].lat,
				longitude:branches[i].lng,
				showWindow: false
			})
		}
		$scope.map.dynamicMarkers = newMarkers;
	};
	StoresModel.getStores().success(storesSuccess);
});








/*
*
*
* From example
*
* */
function ExampleController ($scope, $log, StoresModel) {

	onMarkerClicked = function(marker){
		marker.showWindow = true;
		window.alert("Marker: lat: " + marker.latitude +", lon: " + marker.longitude + " clicked!!")
	};

	angular.extend($scope, {
		map: {
			center: {
				latitude: 45,
				longitude: -73
			},
			options: {
				streetViewControl: false,
				panControl: false
			},
			zoom: 3,
			dragging: false,
			bounds: {},
			markers: [
				{
					latitude: 45,
					longitude: -74,
					showWindow: false,
					title: 'Marker 2'
				},
				{
					latitude: 15,
					longitude: 30,
					showWindow: false,
					title: 'Marker 2'
				},
				{
					latitude: 37,
					longitude: -122,
					showWindow: false,
					title: 'Plane'
				}
			],
			clickedMarker: {
				title: 'You clicked here',
				latitude: null,
				longitude: null
			},
			events: {
				click: function (mapModel, eventName, originalEventArgs) {
					// 'this' is the directive's scope
					$log.log("user defined event: " + eventName, mapModel, originalEventArgs);

					var e = originalEventArgs[0];

					if (!$scope.map.clickedMarker) {
						$scope.map.clickedMarker = {
							title: 'You clicked here',
							latitude: e.latLng.lat(),
							longitude: e.latLng.lng()
						};
					}
					else {
						$scope.map.clickedMarker.latitude = e.latLng.lat();
						$scope.map.clickedMarker.longitude = e.latLng.lng();
					}

					$scope.$apply();
				}
			},
			infoWindow: {
				coords: {
					latitude: 30,
					longitude: -89
				},
				show: false
			},
			templatedInfoWindow: {
				coords: {
					latitude: 60,
					longitude: -95
				},
				show: true,
				templateUrl: 'templates/info.html',
				templateParameter: {
					message: 'passed in from the opener'
				}
			}
		}

	});

	$.each($scope.map.markers,function(marker){
		marker.closeClick = function(){
			marker.showWindow = false;
			$scope.$apply();
		};
		marker.onClicked = function(){
			onMarkerClicked(marker);
		};
	});


	$scope.onMarkerClicked = onMarkerClicked;

	var storesSuccess = function(data, status){
		var branches = data[0].branches;
		for(var i = 0; i < branches.length; i++){
			$scope.map.markers.push({
				latitude:branches[i].lat,
				longitude:branches[i].lng,
				showWindow: false
			})
		}
	};
	StoresModel.getStores().success(storesSuccess);

}
/*
 * PageController.js
 */
app.controller('PageController', function($scope, ConfigFactory, StoresModel){
	ConfigFactory.title = 'Tradings';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;

	$scope.stores = [];
	var storesSuccess = function(data, status){
		$scope.stores = data;
		console.log(status);
	};
	StoresModel.getStores().success(storesSuccess);
});

/*
* TOASTS:
* To make a new toast simply emit this event:
* $rootScope.$emit('makeToast', [{title:'<string>', type:'success | error | warning'}]);
* You can pass 'error', 'success' or 'warning' for the type attribute. If you do not supply one the toast will be gray
* -----
* Don't forget to associate the div to this controller:
* <div id="toasts" ng-controller="ToastController">
* 	<div class="toast {{m.type}}" ng-repeat="m in messages">{{m.title}}</div>
* </div>
* */

app.controller('ToastController', function($scope, $rootScope, $timeout){
	$scope.messages = []

	$rootScope.$on('makeToast', function(ev, data){
		createToast(data[0]);
	});

	function createToast(data){
		$scope.messages.push(data);
		removeToast();
	}
	function removeToast(){
		$timeout(function(){
			$scope.messages.splice(0,1);
		},2500);
	}

});

/*----------------
 DIRECTIVES:
 E is for element,
 A is attribute,
 C is for class,
 M is for comment.
 ---------------*/
app.directive('firstDirective', function(){
	return {
		restrict: "E",
		template: "<div>I am a directive i have been updated using grunt....</div>"
	};
});

app.directive('secondDirective', function(){
	return {
		restrict: "A",
		link: function(){
			console.log('I am second directive');
		}
	};
});

app.directive('enter', function(){
	return{
		link: function(scope, element, attrs){
			element.bind('mouseenter', function(){
				element.text(attrs.enter);
			});
		}
	};
});

/*
* LoadingPopOver.js:
* This directive shows a loading widget for when content is being oulled from the server
* To implement:
*
* <div id="loading" loading-pop-over="Cargando contenido" ng-show="config.loadingPopOver" ng-click="config.loadingPopOver=false">
*
* Where:
* attr id: is related to css styling.
* attr loading-pop-over: is the connection to the directive, the parameter you pass to this attribute will be the text it displays
* attr ng-show: binds the property config.loadingPopOver to the visibility of the widget.
* attr ng-click: for testing purposes only for the widget to desapear on click event.
*/
app.directive('loadingPopOver', function(){
	return{
		templateUrl: 'partials/loadingPopOver.html',
		scope:true,
		link: function(scope, element, attrs){
			if(attrs.loadingPopOver !== ''){
				scope.title = attrs.loadingPopOver;
			}else{
				scope.title = 'Loading content';
			}
		}
	};
});


/*----------------
 /*FILTERS:
 /*---------------*/
app.filter('upperCase', function(){
	return function(text){
		return text.toUpperCase();
	};
});

/*
* ListViewController.js
*/
app.controller('ListViewController', function($scope, $rootScope, $location, ConfigFactory, MusicService){
	ConfigFactory.title = 'List View Controller';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = false;
	ConfigFactory.hasSideNavigation = true;
	$scope.config = ConfigFactory;

	$scope.loginData = {};

	var itemsSuccess = function(data, status){
		$scope.items = data.results.albummatches.album;
		console.log(status);
	};
	MusicService.getStores().success(itemsSuccess);


	$scope.getDetails = function(){
		console.log('dadas');
	};
});
/*
* HomeController.js
*/
app.controller('LoginController', function($scope, $rootScope, $location, ConfigFactory){
	ConfigFactory.title = 'Login';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = false;
	ConfigFactory.hasSideNavigation = false;

	$scope.loginData = {};

	$scope.loginSubmit = function(e){
		console.log($scope.loginData);
		$location.path('/home');
	};
});
/*
* RecoverController.js
*/
app.controller('RecoverController', function($scope, $rootScope, $location, ConfigFactory){
	ConfigFactory.title = 'Recover your password';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = false;
	ConfigFactory.hasSideNavigation = false;

	$scope.mailsent = false;

	$scope.recoverSubmit = function(){
		$scope.mailsent = !$scope.mailsent;
	};
});
//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('MusicService', function($http, $rootScope, ConfigFactory){

	return {
		getStores :  function(){
			return $http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=red+hot+chilli&api_key=77725761af78cf82f9d7a9b304be958e&format=json')
				.error(function(){
					$rootScope.$emit('makeToast', [{title:'Algo salio mal por favor vuelve a intentarlo', type:'error'}]);
				})
				.success(function(data){
					console.log(data);
					//console.log('StoresModel:success');
				});
		}
	};
});
//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('StoresModel', function($http, $rootScope, ConfigFactory){

	return {
		getStores :  function(){
			return $http.get(ConfigFactory.server.services+'stores?branches=true&offers=true')
				.error(function(){
					$rootScope.$emit('makeToast', [{title:'Algo salio mal por favor vuelve a intentarlo', type:'error'}]);
				})
				.success(function(data){
					//console.log(data);
					//console.log('StoresModel:success');
				});
		}
	};
});