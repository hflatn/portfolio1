
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log(slides.length, "whats slides.length?")
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(b) {
  showSlides2(slideIndex2 += b);
}

function currentSlide2(b) {
  showSlides2(slideIndex2 = b);
}

function showSlides2(b) {
  var a;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (b > slides2.length) {slideIndex2 = 1}    
  if (b < 1) {slideIndex2 = slides2.length}
  for (a = 0; a < slides2.length; a++) {
      slides2[a].style.display = "none";  
  }
  for (a = 0; a < dots2.length; a++) {
      dots2[a].className = dots2[a].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}
