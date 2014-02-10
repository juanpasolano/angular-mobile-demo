app.directive('mbGmap',['$rootScope','$parse',
	function( $rootScope, $parse){
		return{
			scope:{
				markers: '=',
				options: '=',
				markerClick: '='
			},

			link: function(scope, element, attrs){

				var map;
				var defaults = {
					zoom:13,
					center :{
						lat:4.582226749273246,
						lng: -74.09687547013164
					}
				};
				scope.defaults = $.extend({}, defaults, scope.options);

				var initialize = function() {
					var mapOptions = {
						zoom: scope.defaults.zoom,
						center: new google.maps.LatLng(scope.defaults.center.lat, scope.defaults.center.lng )
					};
					map = new google.maps.Map($(element).get(0),mapOptions);
				};

				initialize();



				scope.$watch('markers', function(newValue, oldValue){
					if(scope.markers){
						addMarkers();
					}
				});
				var addMarkers = function(){
					if(scope.markers.length > 0){
						for (var i = 0; i < scope.markers.length-100; i++) {
							if(scope.markers[i].lat && scope.markers[i].lng){
								var myLatlng = new google.maps.LatLng(scope.markers[i].lat,scope.markers[i].lng);
								var marker = new google.maps.Marker({
									position: myLatlng,
									map: map
								});
								addMarkerClick(marker);
							}
						}

					}
				};
				var addMarkerClick = function(marker){
					google.maps.event.addListener(marker, 'click', function() {
						if (typeof(scope.markerClick) == "function") {
							return scope.markerClick(marker);
						}
					});
				};


			}
		};
	}
]);