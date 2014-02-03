/*
* TOASTS:
* To make a new toast simply emit this event:
* $rootScope.$emit('makeToast', {title:'<string>', type:'success | error | warning'});
* You can pass 'error', 'success' or 'warning' for the type attribute. If you do not supply one the toast will be gray
* -----
* Don't forget to associate the div to this controller:
* <div id="toasts" ng-controller="ToastController">
*		<div class="toast {{m.type}}" ng-repeat="m in messages">{{m.title}}</div>
* </div>
* */

app.controller('ToastController', function($scope, $rootScope, $timeout){
	$scope.messages = [];

	$rootScope.$on('makeToast', function(ev, data){
		createToast(data);
	});

	function createToast(data){
		$scope.messages.push(data);
		removeToast();
	}
	function removeToast(){
		$timeout(function(){
			$scope.messages.splice(0,1);
		},2500);
	}
});
