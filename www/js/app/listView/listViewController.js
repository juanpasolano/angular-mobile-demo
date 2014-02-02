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