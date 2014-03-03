/*
* D3ChartsCtrl.js
*/

app.controller('D3ChartsCtrl', ['$scope', '$timeout', 'ConfigFactory',
	function($scope, $timeout, ConfigFactory){
		ConfigFactory.title = 'd3 Charts';
		ConfigFactory.hasHeader = true;
		ConfigFactory.hasFooter = false;
		ConfigFactory.hasSideNavigation = true;
		$scope.config = ConfigFactory;


		var data = [
		{name : 'Colico', value: 5},
		{name : 'Dolor cabeza', value: 6},
		{name : 'Dolor espalda', value: 8},
		{name : 'Nauseas', value: 6},
		];
		var d3obj = d3.select(".d3-chart-bar")
			.selectAll("div")
			.data(data);

		var barRowObj = d3obj.enter().append("div").attr('class', 'row bar-row');

		barRowObj.append('div').attr('class', 'column small-2 tar bar-text')
			.text(function(d) { return d.name; });

		var barbarObj = barRowObj.append('div').attr('class', 'column small-10')
			.append('div').attr('class', ' bar-bar')
			.text(function(d) { return d.value; });

		$timeout(function(){
			barbarObj.style("width", function(d) { return d.value *10+"%"; });
		}, 300);
	}
]);