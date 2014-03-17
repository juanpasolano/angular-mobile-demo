/*
* ListViewCtrl.js
*/
app.controller('ListViewCtrl', ['$scope', '$location', 'ConfigFactory', 'MusicService',
	function($scope, $location, ConfigFactory, MusicService){
		ConfigFactory.title = 'List View';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;
		ConfigFactory.hasBackButton = false;
		ConfigFactory.hasRightButton = false;
		ConfigFactory.rightButtonFn = function(ev){
			console.log(ev);
		};

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