var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; 
  
  if (n > dots.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = dots.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].style.display = "none";  
  }
  dots[slideIndex-1].style.display = "block"; 

  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace("active");
  // }
   
  // dots[slideIndex-1].className += " active";
}
