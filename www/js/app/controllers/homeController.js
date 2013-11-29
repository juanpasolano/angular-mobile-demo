app.controller('HomeController', function($scope, ConfigFactory){
	ConfigFactory.title = 'Angular boilerplate';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;
});