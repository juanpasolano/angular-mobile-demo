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
			templateUrl: 'partials/home/home.html',
			controller: 'HomeController'
		})
		.when('/forms', {
			templateUrl: 'partials/forms/forms.html',
			controller: 'FormsController'
		})
		.when('/tradings', {
			templateUrl: 'partials/page.html',
			controller: 'PageController'
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
		hasFooter: true,
		hasHeader:false,
		hasSideNavigation: false,
		loadingPopOver:false
	};
});

