$(document).ready(function (){
  showJsLove();
});

// Functions here
function showJsLove() {
  console.log("I");
  $.getJSON("https://api.github.com/repos/rails/rails/commits", function() {
    console.log("JavaScript");
  });
  console.log("Love");
};

// //another way
// function showJsLove() {
// 	console.log('I')
// 	$.getJSON('https://api.github.com/repos/rails/rails/commits',function(data){
// 		console.log('Love');
// 		console.log('JavaScript');
// 	})
// };