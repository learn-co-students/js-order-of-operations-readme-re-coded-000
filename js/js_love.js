// Functions here
function showJsLove() {
	$.getJSON("https://api.github.com/repos/rails/rails/commits",function(response){
		console.log("I before Love");
		console.log("Love before JavaScript");
	})
};

$(document).ready(function (){
  showJsLove();
});
