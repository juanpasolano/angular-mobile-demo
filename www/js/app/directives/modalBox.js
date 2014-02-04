/*
* modalBox.js:
*
*		$rootScope.$emit('makeModal', {
*			template:'partials/modals/formModal.html',
*			cancelText :'Don`t do it',
*			acceptText: 'Ok, go.',
*			data: 'something'
*		});
*/
app.directive('modalBox', function($http, $compile, $timeout,  $rootScope, $templateCache){
	return{
		scope:true,
		link: function(scope, element, attrs){

			scope.cancelText = "CANCELAR";
			scope.acceptText = "OK";

			var makeModal = function(options){
				if(options.template){

					$http.get(options.template, {cache: $templateCache}).success(function(tplContent){

						if(options.data){
							scope.optionsData = options.data;
						}

						$(element).find('.content').empty();
						$(element).find('.content').append($compile(tplContent)(scope));

						if(options.cancelText){
							scope.cancelText = options.cancelText;
						}

						if(options.acceptText){
							scope.acceptText = options.acceptText;
						}
						$(element).addClass('show');

					}).error(function(e){
						console.log('The modal cannot load the template you provided');
					});
				}else{
					console.log('The modal cannot be displayed. You have to provide a valid template URL');
				}
			};

			$rootScope.$on('makeModal', function(ev, options){
				makeModal(options);
			});

			scope.closeModal =  function(){
				console.log(scope.modalData);
				$(element).removeClass('show');
			};
		}
	};
});
