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

let valueDisplays = document.querySelectorAll("#count");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endvalue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + "+";
    if (startValue == endvalue) {
      clearInterval(counter);
    }
  }, duration);
});
