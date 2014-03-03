/*
* SwiperCtrl.js
*/

app.controller('SwiperCtrl', [ '$scope', '$location', 'ConfigFactory',

	function($scope, $location, ConfigFactory){
		ConfigFactory.title = 'Swiper plugin';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;


		$scope.swithcExample = function(example){
			$scope.exampleDisplayed = example;
		};

		$scope.swiperOpts1 ={
			pagination: '.swiper-pagination',
			cssWidthAndHeight: false,
			loop:true,
			grabCursor: true,
			paginationClickable: false
		};
	}

]);