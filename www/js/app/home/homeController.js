/*
* HomeController.js
*/
app.controller('HomeController', ['$scope', '$rootScope', 'ConfigFactory',
	function($scope, $rootScope, ConfigFactory){
		ConfigFactory.title = 'Angular boilerplate titulo';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = true;
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
			ConfigFactory.loadingPopOver = true;
		};
	}
]);