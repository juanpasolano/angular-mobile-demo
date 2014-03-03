
app.config([ '$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/login', {
			templateUrl: 'partials/login/login.html',
			controller: 'LoginCtrl'
		})
		.when('/login/recover', {
			templateUrl: 'partials/login/recover.html',
			controller: 'RecoverCtrl'
		})
		.when('/home', {
			templateUrl: 'partials/home/home.html',
			controller: 'HomeCtrl'
		})
		.when('/forms', {
			templateUrl: 'partials/forms/forms.html',
			controller: 'FormsCtrl'
		})
		.when('/listview', {
			templateUrl: 'partials/listview/listview.html',
			controller: 'ListViewCtrl'
		})
		.when('/detailDefault/:id', {
			templateUrl: 'partials/details/detailDefault.html',
			controller: 'DetailCtrl'
		})
		.when('/calendar', {
			templateUrl: 'partials/calendar/calendar.html',
			controller: 'CalendarCtrl'
		})
		.when('/swiper', {
			templateUrl: 'partials/swiper/swiper.html',
			controller: 'SwiperCtrl'
		})
		.when('/map', {
			templateUrl: 'partials/map/map.html',
			controller: 'MapCtrl'
		})
		.when('/chartsjs', {
			templateUrl: 'partials/charts/chartsjs.html',
			controller: 'ChartsjsCtrl'
		})
		.when('/d3Charts', {
			templateUrl: 'partials/charts/d3Charts.html',
			controller: 'D3ChartsCtrl'
		})
		.otherwise({
			redirectTo:'/home'
		});
	}
]);