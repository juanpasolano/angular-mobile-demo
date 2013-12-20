/*
 * PageController.js
 */
app.controller('PageController', function($scope, ConfigFactory, StoresService){
	ConfigFactory.title = 'Tradings';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;

	$scope.stores = [];
	var storesSuccess = function(data, status){
		$scope.stores = data;
		console.log(status);
	};
	StoresService.getStores().success(storesSuccess);
});
