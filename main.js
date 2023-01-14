//window.addEventListener('scroll', function(){
    
    
   
//});
//var elem = document.getElementById('mytext');
 var textElement = document.getElementById('inputext');
console.log(textElement);
textElement.addEventListener("scroll", function() {
  //  textElement.classList.add("scroll-background");
  //  textElement.classList.add("bckg");
    
    console.log("hace scroll");
});
function addGradient() {
   // var element = document.querySelector(".titulo");
    textElement.classList.add("gradient");
  }