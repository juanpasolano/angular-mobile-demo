/*
* Switch for checkboxes
* */

app.directive('mbSwitch',['$rootScope', '$timeout',
	function($rootScope, $timeout){
		return{
			template:'<div class="onOffSwitch" ng-swipe-left="off()" ng-swipe-right="on()">'+
				'<div class="handle" ng-class="{off: isChecked==false}"></div>'+
				'<div class="text on" ng-class="{shown: isChecked==true}">{{onText}}</div>'+
				'<div class="text off" ng-class="{shown: isChecked==false}">{{offText}}</div>'+
				'<div class="hidden" ng-transclude>'+
				'</div>'+
			'</div>',
			transclude: true,
			scope:{
				ngModel : '=',
				mbSwitchOn: '@',
				mbSwitchOff: '@'
			},
			link: function(scope, element, attrs, ctrl, transclude){
				var checkbox = element.find('input[type=checkbox]');
				scope.onText = scope.mbSwitchOn || 'ON';
				scope.offText = scope.mbSwitchOff || 'OFF';

				if(scope.ngModel !== undefined){
					scope.isChecked = scope.ngModel;
				}

				scope.$watch('isChecked',function(n,o){
					checkbox.prop('checked', n);
					scope.ngModel = n;
				});

				var toggle =  function(){
					scope.$apply(function(){
						scope.isChecked =  !scope.isChecked;
					});
				};
				scope.on = function(){
					scope.isChecked =  true;
				};

				scope.off = function(){
					scope.isChecked =  false;
				};

				element.on('click', function(){
					toggle();
				});
			}
		};
	}
]);

/*
* Switch for checkboxes
* */

/*app.directive('mbSwitch',['$rootScope', '$timeout',
	function($rootScope, $timeout){
		return{
			scope:true,
			link: function(scope, element, attrs, ctrl, transclude){
				var html = '<div class="onOffSwitch">'+
				'<div class="handle"></div>'+
				'<div class="text on">ON</div>'+
				'<div class="text off">OFF</div>'+
				'<div class="hidden" ng-transclude>'+
				'</div>'+
			'</div>';

				console.log(scope, element, attrs, ctrl, transclude);
			}
		};
	}
]);*/