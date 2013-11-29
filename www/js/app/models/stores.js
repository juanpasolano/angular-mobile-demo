//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('StoresModel', function($http){

	return {
		getStores :  function(){
			return $http.get('http://192.237.180.31/dhm/public/api/stores?branches=true&offers=true')
				.error(function(){
					alert('Algo salio mal por favor vuelve a intentarlo');
				});
		}
	};
});