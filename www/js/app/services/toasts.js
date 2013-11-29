app.service('ToastsService', function () {

	this.config = {
		parentElem : $('#toasts'),
		time :2000,
		queue: []
	};

	this.make = function (text, type) {

		if (config.parentElem.length <= 0) {
			$('body').append('<div id="toasts"></div>');
			config.parentElem = $('#toasts');
		}
		if (!text) text = 'No text provided';
		if (!type) type = ''; //success, warning, error
		theToast = $('<div class="toast ' + type + '">' + text + '</div>');
		theToast.on('click transitionend webkitTransitionEnd', function (e) {
			transitionendListener(e);
		}, false);
		appendToast(theToast);
	};
	this.appendToast = function (theToast) {
		parentElem.prepend(theToast);
		setTimeout(function () {
			theToast.addClass('shown');
		}, 10);
	};
	this.removeToast = function (e) {
		$(e.srcElement).removeClass('shown');
	};
	this.transitionendListener = function (e) {
		var isShown = $(e.srcElement).hasClass('shown');
		if (isShown) {
			setTimeout(function () {
				removeToast(e);
			}, time);
		} else {
			$(e.srcElement).remove();
		}
	};
});