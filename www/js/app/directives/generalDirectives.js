/*----------------
 DIRECTIVES:
 E is for element,
 A is attribute,
 C is for class,
 M is for comment.
 ---------------*/
app.directive('firstDirective', function(){
	return {
		restrict: "E",
		template: "<div>I am a directive i have been updated using grunt....</div>"
	};
});

app.directive('secondDirective', function(){
	return {
		restrict: "A",
		link: function(){
			console.log('I am second directive');
		}
	};
});

app.directive('enter', function(){
	return{
		link: function(scope, element, attrs){
			element.bind('mouseenter', function(){
				element.text(attrs.enter);
			});
		}
	};
});
