/*
*  ANGULAR / FOUNDATION BOILERPLATE
*  Author: Juan Pablo Solano.
*
*/
'use strict';
$.fn.extend({
    disableSelection : function() {
        this.each(function() {
            this.onselectstart = function() { return false; };
            this.unselectable = "on";
            $(this).css('-moz-user-select', 'none');
            $(this).css('-webkit-user-select', 'none');
        });
    }
});


/*
*
* Bootstraping the app
*
* */
(function() {
    /*Changes language to Spanish*/
    moment.lang('es');

    /*Initializes plugin for fastclicking*/
    FastClick.attach(document.body);

    /*Diasbles selection to prevent copy, paste messages on devices*/
    $.fn.disableSelection();

    /*This function executes the Angular bootstrap function*/
    var bootstrapAngular = function(){
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['app']);
        });
    };

    /*We chek if cordova is avalible to listen to device ready*/
    if (typeof cordova !== 'undefined') {
        document.addEventListener("deviceready", function() {
            bootstrapAngular();
        }, false);
    } else {
        bootstrapAngular();
    }
})();


/*
*
* HERE THE ANGULAR MAGIC BEGINS
*
* */

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch']);

app.controller('MainCtrl',[ '$scope', '$element', '$window', 'ConfigFactory',
	function($scope, $element, $window, ConfigFactory){
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
			$element.find('#wrapper, #content .content-cover, #sideNav').toggleClass('open');
		};
		$scope.goBack = function(){
			$window.history.back();
		};
	}
]);

