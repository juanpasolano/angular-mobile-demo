/*
* HomeController.js
*/
app.controller('HomeController', function($scope, $rootScope, ConfigFactory){
	ConfigFactory.title = 'Angular boilerplate titulo';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;
	ConfigFactory.hasSideNavigation = true;

	$scope.emitToast = function(type){
		$rootScope.$emit('makeToast', {title:'This is an emmited toast', type:type});
	};

	$scope.emitModal = function(template){
		$rootScope.$emit('makeModal', {
			template:template,
			cancelText :'Don`t do it',
			acceptText: 'Ok, go.'
		});
	};

	$scope.showLoading = function(){
		ConfigFactory.loadingPopOver = true;
		console.log(ConfigFactory.loadingPopOver);
	};
});