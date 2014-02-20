/*
* DetailController.js
*/

app.controller('DetailController', ['$scope', '$routeParams', '$location', 'ConfigFactory', 'MusicService',
	function($scope, $routeParams, $location, ConfigFactory, MusicService){
		ConfigFactory.title = $routeParams.id;
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;
		ConfigFactory.hasBackButton = true;
		$scope.config = ConfigFactory;

		$scope.itemId = $routeParams.id;

		var itemSuccess = function(data, status){
			$scope.item = data.album;
			console.log(status);
		};

		MusicService.getDetail($routeParams.id).success(itemSuccess);
	}
]);