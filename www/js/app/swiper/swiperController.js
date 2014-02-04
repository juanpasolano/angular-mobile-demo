/*
* SwiperController.js
*/

app.controller('SwiperController', function($scope, $location, ConfigFactory){
	ConfigFactory.title = 'Swiper plugin';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = false;
	ConfigFactory.hasSideNavigation = true;
	$scope.config = ConfigFactory;


	$scope.swithcExample = function(example){
		$scope.exampleDisplayed = example;
	};
});