/*
* ListViewController.js
*/
app.controller('ListViewController', ['$scope', '$location', 'ConfigFactory', 'MusicService',
	function($scope, $location, ConfigFactory, MusicService){
		ConfigFactory.title = 'List View';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
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
	}
]);