/*
* DetailController.js
*/

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