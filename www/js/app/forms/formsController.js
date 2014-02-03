/*
* FormsController.js
*/
app.controller('FormsController', function($scope, $location, ConfigFactory, MusicService){
	ConfigFactory.title = 'Forms';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;
	ConfigFactory.hasSideNavigation = true;
	$scope.config = ConfigFactory;
});