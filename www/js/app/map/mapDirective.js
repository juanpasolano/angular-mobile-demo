app.directive('mbGmap',['$rootScope', '$parse',
	function( $rootScope, $parse){
		return{

			// compile: function(element, attrs){
			// 	// console.log(element, attrs);
			// },
			scope:{
				markers: '='

			},

			link: function(scope, element, attrs){
				var map;
				function initialize() {
					var mapOptions = {
						zoom: 8,
						center: new google.maps.LatLng(4.582226749273246, -74.09687547013164 )
					};
					map = new google.maps.Map($(element).get(0),mapOptions);
				}
				initialize();


				scope.$watch('markers', function(newValue, oldValue){
					if(scope.markers){
						addMarkers();
					}
				});

				var addMarkers = function(){
					if(scope.markers.length > 0){

						for (var i = 0; i < scope.markers.length-100; i++) {
							console.log(scope.markers[i].lat,scope.markers[i].lng);
							var myLatlng = new google.maps.LatLng(scope.markers[i].lat,scope.markers[i].lng);
							var marker = new google.maps.Marker({
								position: myLatlng,
								map: map,
								title: 'Hello World!'
							});
						}

					}
				};



			}
		};
	}
]);