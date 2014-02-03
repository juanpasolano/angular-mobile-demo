/*
* modalBox.js:
*
*		$rootScope.$emit('makeModal', {
*			template:'partials/modals/formModal.html',
*			cancelText :'Don`t do it',
*			acceptText: 'Ok, go.'
*		});
*/
app.directive('modalBox', function($http, $compile, $timeout,  $rootScope, $templateCache){
	return{
		scope:true,
		link: function(scope, element, attrs){

			scope.cancelText = "CANCELAR";
			scope.acceptText = "OK";

			var makeModal = function(data){
				if(data.template){
					$http.get(data.template, {cache: $templateCache}).success(function(tplContent){

						$(element).find('.content').empty();
						$(element).find('.content').append($compile(tplContent)(scope));

						if(data.cancelText){
							scope.cancelText = data.cancelText;
						}

						if(data.acceptText){
							scope.acceptText = data.acceptText;
						}
						$(element).addClass('show');

					}).error(function(e){
						console.log('The modal cannot load the template you provided');
					});
				}else{
					console.log('The modal cannot be displayed. You have to provide a valid template URL');
				}
			};

			$rootScope.$on('makeModal', function(ev, data){
				makeModal(data);
			});

			scope.closeModal =  function(){
				console.log(scope.modalData);
				$(element).removeClass('show');
			};
		}
	};
});
