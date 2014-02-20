/*
* HomeController.js
*/
app.controller('HomeController', ['$scope', '$rootScope', '$timeout', 'ConfigFactory',
	function($scope, $rootScope, $timeout, ConfigFactory){

		ConfigFactory.title = 'Buenas';
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
		$scope.emitStringModal =  function(){
			$rootScope.$emit('makeModal', {
				options:{
					text: '<p>Some text</p>'
				}
			});
		};


		$scope.showLoading = function(){
			$rootScope.$emit('showLoadingPopOver',{
				text:'Loading some content.',
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