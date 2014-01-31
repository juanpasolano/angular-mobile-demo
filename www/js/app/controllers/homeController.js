/*
* HomeController.js
*/
app.controller('HomeController', function($scope, $rootScope, ConfigFactory){
	ConfigFactory.title = 'Angular boilerplate';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;
	ConfigFactory.hasSideNavigation = true;

	$scope.emitToast = function(){
		$rootScope.$emit('makeToast', [{title:'This is an emmited toast', type:'success'}]);
	};
	$scope.showLoading = function(){
		ConfigFactory.loadingPopOver = true;
		console.log(ConfigFactory.loadingPopOver);
	};
});