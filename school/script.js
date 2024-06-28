function changeHeaderStyle(event) {
  const headerDiv = document.querySelector(".navbar");
  const anchorElements = document.querySelectorAll(".navbar a");

  if (window.scrollY > 250) {
    headerDiv.style.transition = "color 2s";
    headerDiv.style.backgroundColor = "#402327";
  } else {
    headerDiv.style.transition = "color 2s";
    headerDiv.style.backgroundColor = "#00000016";
  }
}

window.addEventListener("scroll", changeHeaderStyle);
var checkbox = document.getElementById("check");
var colorChangeElement = document.querySelector(".navbar");
var body = document.querySelector("body");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    colorChangeElement.style.transition = "color 2s";
    colorChangeElement.style.backgroundColor = "#402327";
    body.style.overflow = "hidden";
  } else {
    colorChangeElement.style.transition = "color 2s";
    colorChangeElement.style.backgroundColor = "#00000016";
    body.style.overflow = "scroll";
  }
});
let slideIndex = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";

  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {
    slideIndex3 = 1;
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3 - 1].style.display = "block";
  dots3[slideIndex3 - 1].className += " active";

  let slides4 = document.getElementsByClassName("mySlides4");
  let dots4 = document.getElementsByClassName("dot4");
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {
    slideIndex4 = 1;
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4 - 1].style.display = "block";
  dots4[slideIndex4 - 1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}
