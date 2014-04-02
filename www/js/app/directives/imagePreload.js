/*
* Loading spinner:
* This simple drective puts the template for the loading spinner
* */

app.directive('mbImagepreload',['$rootScope', '$timeout',
	function($rootScope, $timeout){
		return{
			link: function(scope, element, attrs){
				element.css({'opacity': 0, '-webkit-transition': 'all .7s ease-out'});
				element.bind('load', function(){
					element.css({'opacity': 1});
				});
			}
		};
	}
]);