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