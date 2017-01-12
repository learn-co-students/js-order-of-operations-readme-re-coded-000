// Functions here
function showJsLove() {
	console.log("I");
	$.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
		// body...
		console.log("JavaScript");
	})
	//.fail(function(error) {console.log('Something went wrong: ' + error)});
	console.log("Love")
};

$(document).ready(function (){
  showJsLove();
});
