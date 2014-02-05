/*
* swiper.js:
*/
app.directive('mbSwiper', function(){
	return{
		scope:true,
		link: function(scope, element, attrs){

			element.on('click', function(){
				console.log('alala');
			});

			var mySwiper = element.swiper({
				pagination: '.pagination',
				loop:true,
				grabCursor: true,
				paginationClickable: true
			});
		}
	};
});

app.directive('mbSwiperScroll', function(){
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
});

