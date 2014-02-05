/*
* modalBox.js:
*
*		$rootScope.$emit('makeModal', {
*			options:{
*				template:'partials/modals/calendarModal.html',
*				cancelText :'Yep',
*				acceptText: 'Ok, go.',
*			},
*			data: {}
*		});
*
*		The DATA is an object literal that you want to pass to the template of the modal
*/
app.directive('mbModalBox', function($http, $compile, $timeout,  $rootScope, $templateCache){
	return{
		scope:true,
		link: function(scope, element, attrs){

			var defaults = {
				cancelText : "CANCELAR",
				acceptText : "OK",
				title : "Alert"
			};


			var makeModal = function(attrs){
				if(attrs.options.template){

					$http.get(attrs.options.template, {cache: $templateCache}).success(function(tplContent){

						scope.defaults = $.extend({}, defaults, attrs.options);

						if(attrs.data){
							scope.data = attrs.data;
						}

						$(element).find('.content').empty();
						$(element).find('.content').append($compile(tplContent)(scope));

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
