/*
* scrollFixDrivctive.js
* This small directive fixes the overflow scroll bug on ios devices.
*/
app.directive('mbScrollfixer', ['$timeout',
	function($timeout){
		return{
			link: function(scope, element, attrs){
				var el =  $(element);
			$timeout(function(){
				el.css({'overflow-x':'none', 'height': '99%'});
				$timeout(function(){
					el.css({'overflow-x':'scroll', 'height': '100%'});
				}, 600);
			}, 600);
			}
		};
	}
]);
