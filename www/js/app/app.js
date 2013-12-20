/*
*  ANGULAR / TOPCOAT BOILERPLATE
*  Author: Juan Pablo Solano.
 */

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'google-maps']);

app.config(function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.when('/tradings', {
			templateUrl: 'templates/page.html',
			controller: 'PageController'
		})
		.when('/map', {
			templateUrl: 'templates/map.html',
			controller: 'MapDemoController'
		})
		.otherwise({
			redirectTo:'/home'
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
		title : 'Angular boilerplate from factory',
		hasFooter: false,
		hasHeader:false,
		hasSideNavigation: false,
		loadingPopOver:false
	};
});

