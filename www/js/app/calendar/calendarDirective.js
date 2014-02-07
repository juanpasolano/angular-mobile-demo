/*
* CalendarDirective.js
*/
app.directive('mbCalendar',['$rootScope',
	function($rootScope){
		return{
			priority: 1200,
			scope:{
				events: '='
			},
			link: function(scope, element, attrs){
				clndrTemplate = "<div class='clndr-controls row'>" +
					"<div class='clndr-control-button column small-2'>"+
					"<span class='clndr-previous-button entypo-font'>&#59237;</span>"+
					"</div>"+
					"<div class='month column small-8 tac'><%= month %> <%= year %></div>"+
					"<div class='clndr-control-button rightalign column small-2'>"+
					"<span class='clndr-next-button entypo-font tar'>&#59238;</span>"+
					"</div>" +
					"</div>" +
					"<table class='clndr-table' border='0' cellspacing='0' cellpadding='0'>" +
					"<thead>" +
					"<tr class='header-days'>" +
					"<% for(var i = 0; i < daysOfTheWeek.length; i++) { %>" +
					"<td class='header-day'><%= daysOfTheWeek[i] %></td>" +
					"<% } %>" +
					"</tr>" +
					"</thead>" +
					"<tbody>" +
					"<% for(var i = 0; i < numberOfRows; i++){ %>" +
					"<tr>" +
					"<% for(var j = 0; j < 7; j++){ %>" +
					"<% var d = j + i * 7; %>" +
					"<td class='<%= days[d].classes %>'><div class='day-contents'><%= days[d].day %>" +
					"</div></td>" +
					"<% } %>" +
					"</tr>" +
					"<% } %>" +
					"</tbody>" +
					"</table>";

				$(element).clndr({
					template: clndrTemplate,
					events: scope.events,
					clickEvents: {
						click: function(target) {
							//fires a modal box on click on a date if it has events
							if(target.events.length > 0){

								$rootScope.$emit('makeModal', {
									options:{
										template:'partials/modals/calendarModal.html',
										cancelText :'Yep',
										acceptText: 'Ok, go.',
										title: 'Events on '+ target.date._i
									},
									data: target.events
								});
							}
						},
						onMonthChange: function(month) {
							console.log('you just went to ' + month.format('MMMM, YYYY'));
						}
					},
					doneRendering: function() {
						console.log('this would be a fine place to attach custom event handlers.');
					}
				});
			}
		};
	}
]);