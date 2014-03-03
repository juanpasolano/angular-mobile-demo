
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
		.otherwise({
			redirectTo:'/login'
		});
	}
]);