/*
 * MapController.js
 */

app.controller('MapController', ['$scope', '$log', 'ConfigFactory', 'StoresModel',
	function($scope, $log, ConfigFactory, StoresModel){
		ConfigFactory.title = 'Map demo';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;

		$scope.mapOptions = {
			zoom:13,
			center :{
				lat:4.582226749273246,
				lng: -74.09687547013164
			}
		};
		$scope.branches = '';
		$scope.markerClick =  function(marker){
			alert('marker clicked', marker);
		};


		var storesSuccess = function(data, status){
			$scope.branches = data[3].branches;
		};
		StoresModel.getStores().success(storesSuccess);
	}
]);
