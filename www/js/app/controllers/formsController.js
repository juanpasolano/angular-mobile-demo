/*
* FormsController.js lalala
*/
app.controller('FormsController', ['$scope', '$location', 'ConfigFactory',
	function($scope, $location, ConfigFactory){
		ConfigFactory.title = 'Forms';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;

		// $scope.check1 = false;

		$scope.formInfo = {};
		$scope.formInfo.check1 = true;

	}
]);



