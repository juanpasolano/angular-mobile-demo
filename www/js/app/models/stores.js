//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('StoresModel', function($http, $rootScope){

	return {
		getStores :  function(){
			return $http.get('http://192.237.180.31ss/dhm/public/api/stores?branches=true&offers=true')
				.error(function(){
					$rootScope.$emit('makeToast', [{title:'Algo salio mal por favor vuelve a intentarlo', type:'error'}]);
				});
		}
	};
});