/*
*  ANGULAR / TOPCOAT BOILERPLATE
*  Author: Juan Pablo Solano.
 */

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

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
		.otherwise({
			redirectTo:'/home'
		});
});



app.controller('MainController', function($scope, $element, ConfigFactory){
	$scope.config = ConfigFactory;

    $scope.contentStyles = function(){
        var contentH = $(window).height();
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
		hasHeader:false
	}
});

