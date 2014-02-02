/*
* CalendarController.js
*/

app.controller('CalendarController', function($scope, $location, ConfigFactory){
	ConfigFactory.title = 'Calendar';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = false;
	ConfigFactory.hasSideNavigation = true;
	$scope.config = ConfigFactory;

});