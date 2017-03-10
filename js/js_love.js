// Functions here
function showJsLove() {
	console.log('I')
	$.getJSON('https://api.github.com/repos/rails/rails/commits',function(data){
		console.log('Love');
		console.log('JavaScript');
	})
};

$(document).ready(function (){
  showJsLove();
});