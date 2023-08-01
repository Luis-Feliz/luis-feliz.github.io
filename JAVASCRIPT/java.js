//For Slideshow
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

/**********************************************************************************************/
// For Contact me Page
// function sendContact() {
//   var mailTo = "LuisFeliz42100@gmail.com";
//   var name =  document.getElementById("name").value;
//   var mailFrom = document.getElementById("email").value;
//   var subject =  document.getElementById("subject").value;
//   var message =  document.getElementById("message").value;
  // $name = $_POST['name'];
  // $mailFrom = $_POST['email'];
  // $subject = $_POST['subject'];
  // $message = $_POST['message'];

  // $mailTo = "luisfeliz42100@gmail.com";
  // $headers = "From: ".$mailFrom;
  // $txt = "You have received an e-mail from".$name.".\n\n".$message;

  // Email.send({
  //   Host : "smtp.gmail.com",
  //   Username : "luisfeliz42100@gmail.com",
  //   Password : "ErjjfnT9e).4rLM123456",

  //   To : mailTo,
  //   From : mailFrom,
  //   Subject : "SEND VIA PERSONAL SITE: " + subject,
  //   Body : "Name: " + name + "<br>" +
  //          "Message: " + message
  // }).then(
  //   message => alert("Your message has been sent! I'll get back to you reguarding your inquiry whenever I can!")
  // )
//}
