//TODO: check if there is a better/proper way to do this calls and return promises
app.factory('MusicService', function($http, $rootScope, ConfigFactory){

	return {
		getStores :  function(){
			return $http.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=red+hot+chilli&api_key=77725761af78cf82f9d7a9b304be958e&format=json')
				.error(function(){
					$rootScope.$emit('makeToast', [{title:'Algo salio mal por favor vuelve a intentarlo', type:'error'}]);
				})
				.success(function(data){
					console.log(data);
					//console.log('StoresModel:success');
				});
		}
	};
});