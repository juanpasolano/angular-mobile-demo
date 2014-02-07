/*
* LoadingPopOver.js:
* This directive shows a loading widget for when content is being pulled from the server
* To implement:
*
* <div id="loading" mb-loading-pop-over="Hang in there! we are getting some nice data just for you."></div>
*
* To implement import $rootScope in your controller an $emit this event
*
* $rootScope.$emit('showLoadingPopOver',{});
*
*/
app.directive('mbLoadingPopOver', ['$rootScope',
	function($rootScope){
		return{
			templateUrl: 'partials/loadingPopOver.html',
			link: function(scope, element, attrs){

				if(attrs.mbLoadingPopOver !== ''){
					scope.title = attrs.mbLoadingPopOver;
				}else{
					scope.title = 'Loading content';
				}

				element.on('click', function(){
					hideLoadingPopOver();
				});

				var hideLoadingPopOver =  function(){
					$('#wrapper').removeClass(scope.filter);
					element.removeClass('visible');
				};

				var showLoadingPopOver =  function(options){
					$('#wrapper').addClass(scope.filter);
					element.addClass('visible');
				};

				$rootScope.$on('showLoadingPopOver', function(ev, options){
					scope.filter = options !== undefined ? options.filter : 'blur-filter';
					showLoadingPopOver(options);
				});

				$rootScope.$on('hideLoadingPopOver', function(ev, options){
					hideLoadingPopOver();
				});
			}
		};
	}
]);
