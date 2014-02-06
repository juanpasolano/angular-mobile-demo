//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('StoresModel',[ '$http', '$rootScope', 'ConfigFactory',
	function($http, $rootScope, ConfigFactory){
		return {
			getStores :  function(){
				return $http.get(ConfigFactory.server.services+'stores?branches=true&offers=true')
					.error(function(){
						$rootScope.$emit('makeToast', {title:'Algo salio mal por favor vuelve a intentarlo', type:'error'});
					})
					.success(function(data){
						//console.log(data);
						//console.log('StoresModel:success');
					});
			}
		};
	}
]);