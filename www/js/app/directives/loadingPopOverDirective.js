/*
* LoadingPopOver.js:
* This directive shows a loading widget for when content is being oulled from the server
* To implement:
*
* <div id="loading" loading-pop-over="Cargando contenido" ng-show="config.loadingPopOver" ng-click="config.loadingPopOver=false">
*
* Where:
* attr id: is related to css styling.
* attr loading-pop-over: is the connection to the directive, the parameter you pass to this attribute will be the text it displays
* attr ng-show: binds the property config.loadingPopOver to the visibility of the widget.
* attr ng-click: for testing purposes only for the widget to desapear on click event.
*/
app.directive('mbLoadingPopOver', function(){
	return{
		templateUrl: 'partials/loadingPopOver.html',
		scope:true,
		link: function(scope, element, attrs){
			console.log(attrs);
			if(attrs.mbLoadingPopOver !== ''){
				scope.title = attrs.mbLoadingPopOver;
			}else{
				scope.title = 'Loading content';
			}
		}
	};
});
