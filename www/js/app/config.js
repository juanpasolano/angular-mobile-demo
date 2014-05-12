app.factory('ConfigFactory', [
	function(){
		return {
			server: {
				services: 'http://192.237.180.31/dhm/public/api/',
				assets: 'http://192.237.180.31/dhm/public/'
			},
			title : 'Angular boilerplate from factory',
			hasFooter: false,
			hasHeader:false,
			hasSideNavigation: false,
			hasBackButton: false,
            rightClickText: '&#xe1b3;',
			hasRightButton: false,
            rightClickFn: function(){
            }
		};
	}
]);