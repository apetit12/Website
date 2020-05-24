
var slideIndex = 0;
showSlides();

function currentSlide(n){
   clearTimeout(myTimer);
//   myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
   showSlides(slideIndex = n-1);
}


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-active";
  myTimer = setTimeout(showSlides, 10000); // Change image every xxx seconds
}