// Functions here
function showJsLove() {
  $.get('https://api.github.com/repos/rails/rails/commits',function(){
   console.log("I before Love");
  });

  $.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
 
  console.log("Love before JavaScript");
})
}

$(document).ready(function (){
  showJsLove();
});
