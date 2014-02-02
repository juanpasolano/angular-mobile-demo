/*
* ListViewController.js
*/
app.controller('ListViewController', function($scope, $location, ConfigFactory, MusicService){
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


	$scope.getDetails = function(item){
		$location.path('detailDefault/'+item.name);
		console.log(item);
	};
});

app.controller('DetailController', function($scope, $routeParams, $location, ConfigFactory, MusicService){
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

});