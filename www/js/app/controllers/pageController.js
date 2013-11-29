/*
 * PageController.js
 */
app.controller('PageController', function($scope, ConfigFactory, StoresModel){
	ConfigFactory.title = 'Angular boilerplate';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = false;

	$scope.stores = [];
	var storesSuccess = function(data, status){
		$scope.stores = data;
		console.log(status);
	};
	StoresModel.getStores().success(storesSuccess);
});
