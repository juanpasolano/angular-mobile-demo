/*
* swiper.js:
*/

app.directive('mbSwiper', [
	function(){
		return{
			transclude: true,
			template:'<div class="swiper-container"><div class="swiper-wrapper" ng-transclude></div></div>',
			scope:{
				options: '=mbSwiperOptions'
			},
			link: function(scope, element, attrs){

				//default options of plugin
				var defaults = {
					loop:true,
					grabCursor: true,
				};

				//extending defaults and scope.options into the settings variable
				var settings = $.extend({}, defaults, scope.options);

				//adding the swiper-slide class to all the childs of swiper-wrapper
				element.find('.swiper-wrapper > div').addClass('swiper-slide');

				//chek if pagination is set in options to create it and append it
				if(scope.options.pagination && typeof scope.options.pagination == 'string'){
					var pagsClass =  scope.options.pagination.replace('.', '');
					element.append( $('<div class="'+pagsClass+'"></div>') );
				}

				//Find the swiper DOM element where it will be initialized
				var swiperElem = element.find('.swiper-container');
				var mySwiper = swiperElem.swiper(settings);
			}
		};
	}
]);

app.directive('mbSwiperScroll', [
	function(){
		return{
			template : '<div class="swiper-scrollbar swiper-scrollbar-vertical"></div>'+
				'<div class="swiper-wrapper">'+
					'<div class="swiper-slide" ng-transclude>'+
					'</div>'+
				'</div>'+
			'</div>',
			transclude :  true,
			scope : true,
			link : function(scope, element, attrs){

				var mySwiper = $(element).swiper({
					scrollContainer: true,
					mode:'vertical',
					scrollbar: {
						container: '.swiper-scrollbar'
					}
				});
			}
		};
	}
]);

