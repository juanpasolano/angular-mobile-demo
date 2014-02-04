/*
* CalendarController.js
*/

app.controller('CalendarController', function($scope, $location, ConfigFactory){
	ConfigFactory.title = 'Calendar';
	ConfigFactory.hasHeader = true;
	ConfigFactory.hasFooter = false;
	ConfigFactory.hasSideNavigation = true;
	$scope.config = ConfigFactory;

	$scope.events = [
		{ date: '2014-02-09', title: 'Lorem ipsum dolor sit.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 2.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 3.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 4.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 5.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-09', title: 'Lorem ipsum dolor sit 6.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-09', title: 'Quickly embrace high standards in.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-12', title: 'Quickly deliver state of.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-18', title: 'Compellingly re-engineer client.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-02-22', title: 'Appropriately expedite', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-03-11', title: 'Lorem ipsum dolor sit.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-03-13', title: 'Quickly embrace high standards in.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-03-13', title: 'Quickly deliver state of.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-03-23', title: 'Compellingly re-engineer client.', url: 'http://github.com/kylestetz/CLNDR' },
		{ date: '2014-03-26', title: 'Appropriately expedite', url: 'http://github.com/kylestetz/CLNDR' }
	];

});