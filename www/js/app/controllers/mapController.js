/*
 * MapController.js
 */
app.controller('MapDemoController', function($scope, $log, ConfigFactory, StoresModel){
	ConfigFactory.title = 'Map demo';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = true;
	ConfigFactory.hasSideNavigation = true;

	onMarkerClicked = function(marker){
		marker.showWindow = true;
		window.alert("Marker: lat: " + marker.latitude +", lon: " + marker.longitude + " clicked!!");
	};

	$scope.map = {
		center: {
			latitude: 4.703380,
			longitude: -74.04208883
		},
		options: {
			streetViewControl: false,
				panControl: false
		},
		zoom: 12,
			dragging: false,
			bounds: {},
		markers: [
			{
				latitude: 45,
				longitude: -74,
				showWindow: false,
				title: 'Marker 2'
			},
			{
				latitude: 15,
				longitude: 30,
				showWindow: false,
				title: 'Marker 2'
			},
			{
				latitude: 37,
				longitude: -122,
				showWindow: false,
				title: 'Plane'
			}
		],
		dynamicMarkers : [],
		clickedMarker: {
			title: 'You clicked here',
			latitude: null,
			longitude: null
		},
		events: {
			click: function (mapModel, eventName, originalEventArgs) {
				// 'this' is the directive's scope
				$log.log("user defined event: " + eventName, mapModel, originalEventArgs);

				var e = originalEventArgs[0];

				if (!$scope.map.clickedMarker) {
					$scope.map.clickedMarker = {
						title: 'You clicked here',
						latitude: e.latLng.lat(),
						longitude: e.latLng.lng()
					};
				}
				else {
					$scope.map.clickedMarker.latitude = e.latLng.lat();
					$scope.map.clickedMarker.longitude = e.latLng.lng();
				}

				$scope.$apply();
			}
		},
		infoWindow: {
			coords: {
				latitude: 30,
				longitude: -89
			},
			show: false
		},
		templatedInfoWindow: {
			coords: {
				latitude: 60,
				longitude: -95
			},
			show: true,
				templateUrl: 'templates/info.html',
				templateParameter: {
				message: 'passed in from the opener'
			}
		}
	}

	/*$.each($scope.map.markers,function(marker){
		marker.closeClick = function(){
			marker.showWindow = false;
			$scope.$apply();
		};
		marker.onClicked = function(){
			onMarkerClicked(marker);
		};
	});  */

	$scope.onMarkerClicked = onMarkerClicked



	//http://192.237.180.31/dhm/public/assets/img/stores/7_thumbnail.jpg
	var storesSuccess = function(data, status){
		var branches = data[0].branches;
		var newMarkers = []
		for(var i = 0; i < branches.length-100; i++){
			console.log(i + ' : ' +branches[i].lat + ',' + branches[i].lng );
			newMarkers.push({
				latitude:branches[i].lat,
				longitude:branches[i].lng,
				showWindow: false
			})
		}
		$scope.map.dynamicMarkers = newMarkers;
	};
	StoresModel.getStores().success(storesSuccess);
});








/*
*
*
* From example
*
* */
function ExampleController ($scope, $log, StoresModel) {

	onMarkerClicked = function(marker){
		marker.showWindow = true;
		window.alert("Marker: lat: " + marker.latitude +", lon: " + marker.longitude + " clicked!!")
	};

	angular.extend($scope, {
		map: {
			center: {
				latitude: 45,
				longitude: -73
			},
			options: {
				streetViewControl: false,
				panControl: false
			},
			zoom: 3,
			dragging: false,
			bounds: {},
			markers: [
				{
					latitude: 45,
					longitude: -74,
					showWindow: false,
					title: 'Marker 2'
				},
				{
					latitude: 15,
					longitude: 30,
					showWindow: false,
					title: 'Marker 2'
				},
				{
					latitude: 37,
					longitude: -122,
					showWindow: false,
					title: 'Plane'
				}
			],
			clickedMarker: {
				title: 'You clicked here',
				latitude: null,
				longitude: null
			},
			events: {
				click: function (mapModel, eventName, originalEventArgs) {
					// 'this' is the directive's scope
					$log.log("user defined event: " + eventName, mapModel, originalEventArgs);

					var e = originalEventArgs[0];

					if (!$scope.map.clickedMarker) {
						$scope.map.clickedMarker = {
							title: 'You clicked here',
							latitude: e.latLng.lat(),
							longitude: e.latLng.lng()
						};
					}
					else {
						$scope.map.clickedMarker.latitude = e.latLng.lat();
						$scope.map.clickedMarker.longitude = e.latLng.lng();
					}

					$scope.$apply();
				}
			},
			infoWindow: {
				coords: {
					latitude: 30,
					longitude: -89
				},
				show: false
			},
			templatedInfoWindow: {
				coords: {
					latitude: 60,
					longitude: -95
				},
				show: true,
				templateUrl: 'templates/info.html',
				templateParameter: {
					message: 'passed in from the opener'
				}
			}
		}

	});

	$.each($scope.map.markers,function(marker){
		marker.closeClick = function(){
			marker.showWindow = false;
			$scope.$apply();
		};
		marker.onClicked = function(){
			onMarkerClicked(marker);
		};
	});


	$scope.onMarkerClicked = onMarkerClicked;

	var storesSuccess = function(data, status){
		var branches = data[0].branches;
		for(var i = 0; i < branches.length; i++){
			$scope.map.markers.push({
				latitude:branches[i].lat,
				longitude:branches[i].lng,
				showWindow: false
			})
		}
	};
	StoresModel.getStores().success(storesSuccess);

}