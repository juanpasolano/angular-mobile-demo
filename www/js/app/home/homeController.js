/*
* HomeController.js
*/
app.controller('HomeController', ['$scope', '$rootScope', '$timeout', 'ConfigFactory',
	function($scope, $rootScope, $timeout, ConfigFactory){
		ConfigFactory.title = 'Angular boilerplate titulo';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;

		$scope.emitToast = function(type){
			$rootScope.$emit('makeToast', {title:'This is an emmited toast', type:type});
		};

		$scope.emitModal = function(template){
			$rootScope.$emit('makeModal', {
				options:{
					template: template,
					cancelText :'Dont fire that',
					acceptText: 'Lets rock!',

					title: 'Modal demo'
				}
			});

		};
		$scope.showLoading = function(){
			$rootScope.$emit('showLoadingPopOver',{
				filter:'blur-filter'
			});
		};

		// This horible snippet will fix the scrolling weird problem on iOS, but yikes!
		$timeout(function(){
			var page = $('.page');
			page.removeClass('page');
					$timeout(function(){
						page.addClass('page');
					}, 600);
		}, 600);
	}
]);