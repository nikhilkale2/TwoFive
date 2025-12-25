let bulb = document.querySelector("#Bulb");
let button = document.querySelector("#Btn");

let isclick = true;

button.addEventListener("click", function () {
  if (isclick) {
    bulb.style.backgroundColor = "black";
    bulb.style.boxShadow = "0 0 20px 15px black";
    bulb.style.border = "2px solid grey";
    bulb.style.transition = "all 0.5s ease-in-out";
    button.innerHTML = "OFF";
    isclick = false;
  } else {
    bulb.style.backgroundColor = "yellow";
    bulb.style.boxShadow = "0 0 20px 15px orange";
    bulb.style.border = "2px solid orange";
    button.innerHTML = "ON";
    isclick = true;
  }
});
