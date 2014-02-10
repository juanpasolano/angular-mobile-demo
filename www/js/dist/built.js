/*
*  ANGULAR / FOUNDATION BOILERPLATE
*  Author: Juan Pablo Solano.
*
*/
'use strict';

$(function() {
	FastClick.attach(document.body);
});

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config([ '$routeProvider',
	function($routeProvider){
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
			templateUrl: 'partials/home/home.html',
			controller: 'HomeController'
		})
		.when('/forms', {
			templateUrl: 'partials/forms/forms.html',
			controller: 'FormsController'
		})
		.when('/listview', {
			templateUrl: 'partials/listview/listview.html',
			controller: 'ListViewController'
		})
		.when('/detailDefault/:id', {
			templateUrl: 'partials/details/detailDefault.html',
			controller: 'DetailController'
		})
		.when('/calendar', {
			templateUrl: 'partials/calendar/calendar.html',
			controller: 'CalendarController'
		})
		.when('/swiper', {
			templateUrl: 'partials/swiper/swiper.html',
			controller: 'SwiperController'
		})
		.when('/map', {
			templateUrl: 'partials/map/map.html',
			controller: 'MapController'
		})
		.when('/chartsjs', {
			templateUrl: 'partials/charts/chartsjs.html',
			controller: 'ChartsjsController'
		})
		.when('/d3Charts', {
			templateUrl: 'partials/charts/d3Charts.html',
			controller: 'D3ChartsController'
		})
		.otherwise({
			redirectTo:'/login'
		});
	}
]);



app.controller('MainController',[ '$scope', '$element', 'ConfigFactory',
	function($scope, $element, ConfigFactory){
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
			$element.find('#sideNav').toggleClass('open');
		};
	}
]);


app.factory('ConfigFactory', [
	function(){
		return {
			server: {
				services: 'http://192.237.180.31/dhm/public/api/',
				assets: 'http://192.237.180.31/dhm/public/'
			},
			title : 'Angular boilerplate from factory',
			hasFooter: true,
			hasHeader:false,
			hasSideNavigation: false
		};
	}
]);


/*
* CalendarController.js
*/

app.controller('CalendarController', ['$scope', '$rootScope', '$location', 'ConfigFactory',
	function($scope, $rootScope, $location, ConfigFactory){
		ConfigFactory.title = 'Calendar';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;

		$scope.events = [
			{ date: '2014-01-09', title: 'Lorem ipsum dolor sit.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-09', title: 'Lorem ipsum dolor sit.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 2.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 3.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 4.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 5.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 6.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-09', title: 'Quickly embrace high standards in.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-12', title: 'Quickly deliver state of.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-18', title: 'Compellingly re-engineer client.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-02-22', title: 'Appropriately expedite', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-03-11', title: 'Lorem ipsum dolor sit.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-03-13', title: 'Quickly embrace high standards in.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-03-13', title: 'Quickly deliver state of.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-03-23', title: 'Compellingly re-engineer client.', url: 'http://github.com/kylestetz/CLNDR' },
			{ date: '2014-03-26', title: 'Appropriately expedite', url: 'http://github.com/kylestetz/CLNDR' }
		];

		$scope.calendarDayClick = function(target){
			if(target.events.length > 0){
				$rootScope.$emit('makeModal', {
					options:{
						template:'partials/modals/calendarModal.html',
						cancelText :'Yep',
						acceptText: 'Ok, go.',
						title: 'Events on '+ target.date._i
					},
					data: target.events
				});
			}
		};
	}
]);
/*
* CalendarDirective.js
*/
app.directive('mbCalendar',['$rootScope',
	function($rootScope){
		return{
			priority: 1200,
			scope:{
				events: '=',
				mbCalendarDayClick: '='
			},
			link: function(scope, element, attrs){
				var clndrTemplate = "<div class='clndr-controls row'>" +
					"<div class='clndr-control-button column small-2'>"+
					"<span class='clndr-previous-button entypo-font'>&#59237;</span>"+
					"</div>"+
					"<div class='month column small-8 tac'><%= month %> <%= year %></div>"+
					"<div class='clndr-control-button rightalign column small-2'>"+
					"<span class='clndr-next-button entypo-font tar'>&#59238;</span>"+
					"</div>" +
					"</div>" +
					"<table class='clndr-table' border='0' cellspacing='0' cellpadding='0'>" +
					"<thead>" +
					"<tr class='header-days'>" +
					"<% for(var i = 0; i < daysOfTheWeek.length; i++) { %>" +
					"<td class='header-day'><%= daysOfTheWeek[i] %></td>" +
					"<% } %>" +
					"</tr>" +
					"</thead>" +
					"<tbody>" +
					"<% for(var i = 0; i < numberOfRows; i++){ %>" +
					"<tr>" +
					"<% for(var j = 0; j < 7; j++){ %>" +
					"<% var d = j + i * 7; %>" +
					"<td class='<%= days[d].classes %>'><div class='day-contents'><%= days[d].day %>" +
					"</div></td>" +
					"<% } %>" +
					"</tr>" +
					"<% } %>" +
					"</tbody>" +
					"</table>";

				$(element).clndr({
					template: clndrTemplate,
					events: scope.events,
					clickEvents: {
						click: function(target) {
							if (typeof(scope.mbCalendarDayClick) == "function") {
								scope.mbCalendarDayClick(target);
							}
						},
						onMonthChange: function(month) {
							console.log('you just went to ' + month.format('MMMM, YYYY'));
						}
					},
					doneRendering: function() {
						console.log('this would be a fine place to attach custom event handlers.');
					}
				});
			}
		};
	}
]);
/*
* ChartsjsController.js
*/

app.controller('ChartsjsController', ['$scope', '$timeout', 'ConfigFactory',
	function($scope, $timeout, ConfigFactory){
		ConfigFactory.title = 'Chart.js';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;


		// var data = [
		// {name : 'Colico', value: 5},
		// {name : 'Dolor cabeza', value: 6},
		// {name : 'Dolor espalda', value: 8},
		// {name : 'Nauseas', value: 6},
		// ];

		var ctx = $("#myChart").get(0).getContext("2d");



		// var data = {
		// 	labels : ["January","February","March","April","May","June","July"],
		// 	datasets : [
		// 		{
		// 			fillColor : "rgba(220,220,220,0.5)",
		// 			strokeColor : "rgba(220,220,220,1)",
		// 			pointColor : "rgba(220,220,220,1)",
		// 			pointStrokeColor : "#fff",
		// 			data : [65,59,90,81,56,55,40]
		// 		},
		// 		{
		// 			fillColor : "rgba(151,187,205,0.5)",
		// 			strokeColor : "rgba(151,187,205,1)",
		// 			pointColor : "rgba(151,187,205,1)",
		// 			pointStrokeColor : "#fff",
		// 			data : [28,48,40,19,96,27,100]
		// 		}
		// 	]
		// };
		// var myNewChart = new Chart(ctx).Line(data);

		var options = {

	//Boolean - If we show the scale above the chart data
	scaleOverlay : false,

	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,

	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 10,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 1,
	//Number - The scale starting value
	scaleStartValue : 0,

	//String - Colour of the scale line
	scaleLineColor : "rgba(0,0,0,.1)",

	//Number - Pixel width of the scale line
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale
	scaleShowLabels : true,

	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",

	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",

	//Number - Scale label font size in pixels
	scaleFontSize : 12,

	//String - Scale label font weight style
	scaleFontStyle : "normal",

	//String - Scale label font colour
	scaleFontColor : "#666",

	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 1,

	//Boolean - If there is a stroke on each bar
	barShowStroke : true,

	//Number - Pixel width of the bar stroke
	barStrokeWidth : 2,

	//Number - Spacing between each of the X value sets
	barValueSpacing : 5,

	//Number - Spacing between data sets within X values
	barDatasetSpacing : 1,

	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,

	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
};
		var data = {
			labels : ["Cólico","Dolor\nCabeza","Dolor Espalda","Nauseas"],
			datasets : [
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					data : [6,2,3,5]
				}
			]
		};
		var myNewChart = new Chart(ctx).Line(data, options);
	}
]);
/*
* D3ChartsController.js
*/

app.controller('D3ChartsController', ['$scope', '$timeout', 'ConfigFactory',
	function($scope, $timeout, ConfigFactory){
		ConfigFactory.title = 'd3 Charts';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;


		var data = [
		{name : 'Colico', value: 5},
		{name : 'Dolor cabeza', value: 6},
		{name : 'Dolor espalda', value: 8},
		{name : 'Nauseas', value: 6},
		];
		var d3obj = d3.select(".d3-chart-bar")
			.selectAll("div")
			.data(data);

		var barRowObj = d3obj.enter().append("div").attr('class', 'row bar-row');

		barRowObj.append('div').attr('class', 'column small-2 tar bar-text')
			.text(function(d) { return d.name; });

		var barbarObj = barRowObj.append('div').attr('class', 'column small-10')
			.append('div').attr('class', ' bar-bar')
			.text(function(d) { return d.value; });

		$timeout(function(){
			barbarObj.style("width", function(d) { return d.value *10+"%"; });
		}, 300);
	}
]);
/*
* DetailController.js
*/

app.controller('DetailController', ['$scope', '$routeParams', '$location', 'ConfigFactory', 'MusicService',
	function($scope, $routeParams, $location, ConfigFactory, MusicService){
		ConfigFactory.title = $routeParams.id;
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;

		$scope.itemId = $routeParams.id;

		var itemSuccess = function(data, status){
			$scope.item = data.album;
			console.log(status);
		};

		MusicService.getDetail($routeParams.id).success(itemSuccess);
	}
]);
/*
* LoadingPopOver.js:
* This directive shows a loading widget for when content is being pulled from the server
* To implement:
*
* <div id="loading" mb-loading-pop-over="Hang in there! we are getting some nice data just for you."></div>
*
* To implement import $rootScope in your controller an $emit this event
*
* $rootScope.$emit('showLoadingPopOver',{});
*
*/
app.directive('mbLoadingPopOver', ['$rootScope',
	function($rootScope){
		return{
			templateUrl: 'partials/loadingPopOver.html',
			link: function(scope, element, attrs){

				if(attrs.mbLoadingPopOver !== ''){
					scope.title = attrs.mbLoadingPopOver;
				}else{
					scope.title = 'Loading content';
				}

				element.on('click', function(){
					hideLoadingPopOver();
				});

				var hideLoadingPopOver =  function(){
					$('#wrapper').removeClass(scope.filter);
					element.removeClass('visible');
				};

				var showLoadingPopOver =  function(options){
					$('#wrapper').addClass(scope.filter);
					element.addClass('visible');
				};

				$rootScope.$on('showLoadingPopOver', function(ev, options){
					scope.filter = options !== undefined ? options.filter : 'blur-filter';
					showLoadingPopOver(options);
				});

				$rootScope.$on('hideLoadingPopOver', function(ev, options){
					hideLoadingPopOver();
				});
			}
		};
	}
]);

/*
* modalBox.js:
*
*		$rootScope.$emit('makeModal', {
*			options:{
*				template:'partials/modals/calendarModal.html',
*				cancelText :'Yep',
*				acceptText: 'Ok, go.',
*			},
*			data: {}
*		});
*
*		The DATA is an object literal that you want to pass to the template of the modal
*/
app.directive('mbModalBox',['$http', '$compile', '$timeout',  '$rootScope', '$templateCache', 'ConfigFactory',
	function($http, $compile, $timeout,  $rootScope, $templateCache, ConfigFactory){
		return{
			scope:true,
			link: function(scope, element, attrs){

				var defaults = {
					cancelText : "CANCELAR",
					acceptText : "OK",
					title : "Alert"
				};


				var makeModal = function(attrs){
					if(attrs.options.template){

						$http.get(attrs.options.template, {cache: $templateCache}).success(function(tplContent){

							scope.defaults = $.extend({}, defaults, attrs.options);

							ConfigFactory.wrapperIsBlured = true;

							if(attrs.data){
								scope.data = attrs.data;
							}

							$(element).find('.content').empty();
							$(element).find('.content').append($compile(tplContent)(scope));

							$(element).addClass('show');

						}).error(function(e){
							console.log('The modal cannot load the template you provided');
						});
					}else{
						console.log('The modal cannot be displayed. You have to provide a valid template URL');
					}
				};

				$rootScope.$on('makeModal', function(ev, options){
					makeModal(options);
				});

				scope.closeModal =  function(){
					$(element).removeClass('show');
					ConfigFactory.wrapperIsBlured = false;
				};
			}
		};
	}
]);
/*
* TOASTS:
* To make a new toast simply emit this event:
* $rootScope.$emit('makeToast', {title:'<string>', type:'success | error | warning'});
* You can pass 'error', 'success' or 'warning' for the type attribute. If you do not supply one the toast will be gray
* -----
* Don't forget to associate the div to this controller:
* <div id="toasts" mb-toast="">
*		<div class="toast {{m.type}}" ng-repeat="m in messages">{{m.title}}</div>
* </div>
* */

app.directive('mbToast',['$rootScope', '$timeout',
	function($rootScope, $timeout){
		return{
			scope:true,
			link: function(scope, element, attrs){
				scope.messages = [];
				function createToast(data){
					scope.messages.push(data);
					removeToast();
				}
				function removeToast(){
					$timeout(function(){
						scope.messages.splice(0,1);
					},2500);
				}
				$rootScope.$on('makeToast', function(ev, data){
					createToast(data);
				});
			}
		};
	}
]);

/*----------------
 /*FILTERS:
 /*---------------*/
app.filter('upperCase', function(){
	return function(text){
		return text.toUpperCase();
	};
});

/*
* FormsController.js
*/
app.controller('FormsController', ['$scope', '$location', 'ConfigFactory',
	function($scope, $location, ConfigFactory){
		ConfigFactory.title = 'Forms';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;
	}
]);
/*
* HomeController.js
*/
app.controller('HomeController', ['$scope', '$rootScope', '$timeout', 'ConfigFactory',
	function($scope, $rootScope, $timeout, ConfigFactory){

		ConfigFactory.title = 'Angular boilerplate titulo';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;

		$scope.emitToast = function(type){
			$rootScope.$emit('makeToast', {title:'This is an emmited toast', type:type});
		};

		$scope.emitModal = function(template){
			$rootScope.$emit('makeModal', {
				options:{
					template: template,
					cancelText :'Dont fire that',
					acceptText: 'Lets rock!',

					title: 'Modal demo'
				}
			});

		};
		$scope.showLoading = function(){
			$rootScope.$emit('showLoadingPopOver',{
				filter:'blur-filter'
			});
		};

		// This horible snippet will fix the scrolling weird problem on iOS, but yikes!
		$timeout(function(){
			var page = $('.page');
			page.removeClass('page');
					$timeout(function(){
						page.addClass('page');
					}, 600);
		}, 600);
	}
]);
/*
* ListViewController.js
*/
app.controller('ListViewController', ['$scope', '$location', 'ConfigFactory', 'MusicService',
	function($scope, $location, ConfigFactory, MusicService){
		ConfigFactory.title = 'List View';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;

		$scope.loginData = {};

		var itemsSuccess = function(data, status){
			$scope.items = data.results.albummatches.album;
			console.log(status);
		};
		MusicService.getStores().success(itemsSuccess);

		$scope.getDetails = function(item){
			$location.path('detailDefault/'+item.name);
			console.log(item);
		};
	}
]);
/*
* HomeController.js
*/
app.controller('LoginController',[ '$scope', '$rootScope', '$location', 'ConfigFactory',
	function($scope, $rootScope, $location, ConfigFactory){
		ConfigFactory.title = 'Login';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = false;

		$scope.loginData = {};

		$scope.loginSubmit = function(e){
			console.log($scope.loginData);
			$location.path('/home');
		};
	}
]);
/*
* RecoverController.js
*/
app.controller('RecoverController',[ '$scope', '$rootScope', '$location', 'ConfigFactory',
	function($scope, $rootScope, $location, ConfigFactory){
		ConfigFactory.title = 'Recover your password';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = false;

		$scope.mailsent = false;

		$scope.recoverSubmit = function(){
			$scope.mailsent = !$scope.mailsent;
		};
	}
]);
/*
 * MapController.js
 */

app.controller('MapController', ['$scope', '$log', 'ConfigFactory', 'StoresModel',
	function($scope, $log, ConfigFactory, StoresModel){
		ConfigFactory.title = 'Map demo';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;


		$scope.branches;
		var storesSuccess = function(data, status){
			$scope.branches = data[3].branches;
		};


		StoresModel.getStores().success(storesSuccess);
	}
]);

/*app.controller('MapDemoController',['$scope', '$log', 'ConfigFactory', 'StoresModel',

	function($scope, $log, ConfigFactory, StoresModel){
		ConfigFactory.title = 'Map demo';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;

		onMarkerClicked = function(marker){
			marker.showWindow = true;
			window.alert("Marker: lat: " + marker.latitude +", lon: " + marker.longitude + " clicked!!");
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
		};

		$scope.onMarkerClicked = onMarkerClicked;



		//http://192.237.180.31/dhm/public/assets/img/stores/7_thumbnail.jpg
		var storesSuccess = function(data, status){
			var branches = data[0].branches;
			var newMarkers = [];
			for(var i = 0; i < branches.length-100; i++){
				console.log(i + ' : ' +branches[i].lat + ',' + branches[i].lng );
				newMarkers.push({
					latitude:branches[i].lat,
					longitude:branches[i].lng,
					showWindow: false
				});
			}
			$scope.map.dynamicMarkers = newMarkers;
		};
		StoresModel.getStores().success(storesSuccess);
	}
]);*/


app.directive('mbGmap',['$rootScope', '$parse',
	function( $rootScope, $parse){
		return{

			// compile: function(element, attrs){
			// 	// console.log(element, attrs);
			// },
			scope:{
				markers: '='

			},

			link: function(scope, element, attrs){
				var map;
				function initialize() {
					var mapOptions = {
						zoom: 8,
						center: new google.maps.LatLng(4.582226749273246, -74.09687547013164 )
					};
					map = new google.maps.Map($(element).get(0),mapOptions);
				}
				initialize();


				scope.$watch('markers', function(newValue, oldValue){
					if(scope.markers){
						addMarkers();
					}
				});

				var addMarkers = function(){
					if(scope.markers.length > 0){

						for (var i = 0; i < scope.markers.length-100; i++) {
							console.log(scope.markers[i].lat,scope.markers[i].lng);
							var myLatlng = new google.maps.LatLng(scope.markers[i].lat,scope.markers[i].lng);
							var marker = new google.maps.Marker({
								position: myLatlng,
								map: map,
								title: 'Hello World!'
							});
						}

					}
				};



			}
		};
	}
]);
//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('MusicService',[ '$http', '$rootScope', 'ConfigFactory',
	function($http, $rootScope, ConfigFactory){
		return {
			getStores :  function(){
				$rootScope.$emit('showLoadingPopOver');
				return $http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=red+hot+chilli&artist=red+hot+chilli&api_key=77725761af78cf82f9d7a9b304be958e&format=json')
					.error(function(){
						$rootScope.$emit('hideLoadingPopOver');
						$rootScope.$emit('makeToast', {title:'Algo salio mal por favor vuelve a intentarlo', type:'error'});
					})
					.success(function(data){
						$rootScope.$emit('hideLoadingPopOver');
						console.log(data);
					});
			},
			getDetail: function(id){
				return $http.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=red+hot+chilli+peppers&album='+id+'&api_key=77725761af78cf82f9d7a9b304be958e&format=json')
					.error(function(){
						$rootScope.$emit('makeToast', {title:'Algo salio mal por favor vuelve a intentarlo', type:'error'});
					})
					.success(function(data){
						console.log(data);
						//console.log('StoresModel:success');
					});
			}
		};
	}
]);
//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('StoresModel',[ '$http', '$rootScope', 'ConfigFactory',
	function($http, $rootScope, ConfigFactory){
		return {
			getStores :  function(){
				return $http.get('http://192.237.180.31/dhm/public/api/stores?branches=true&offers=true')
					.error(function(){
						$rootScope.$emit('makeToast', {title:'Algo salio mal por favor vuelve a intentarlo', type:'error'});
					})
					.success(function(data){
						//console.log(data);
						//console.log('StoresModel:success');
					});
			}
		};
	}
]);
/*
* SwiperController.js
*/

app.controller('SwiperController', [ '$scope', '$location', 'ConfigFactory',

	function($scope, $location, ConfigFactory){
		ConfigFactory.title = 'Swiper plugin';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;


		$scope.swithcExample = function(example){
			$scope.exampleDisplayed = example;
		};
	}

]);
/*
* swiper.js:
*/
app.directive('mbSwiper', [
	function(){
		return{
			scope:true,
			link: function(scope, element, attrs){
				var mySwiper = element.swiper({
					pagination: '.pagination',
					loop:true,
					grabCursor: true,
					paginationClickable: true
				});
			}
		};
	}
]);

app.directive('mbSwiperScroll', [
	function(){
		return{
			template : '<div class="swiper-scrollbar swiper-scrollbar-vertical"></div>'+
				'<div class="swiper-wrapper">'+
					'<div class="swiper-slide" ng-transclude>'+
					'</div>'+
				'</div>'+
			'</div>',
			transclude :  true,
			scope : true,
			link : function(scope, element, attrs){

				var mySwiper = $(element).swiper({
					scrollContainer: true,
					mode:'vertical',
					scrollbar: {
						container: '.swiper-scrollbar'
					}
				});
			}
		};
	}
]);

