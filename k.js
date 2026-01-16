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

function swiperAnimation() {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "coverflow",
    coverFlowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      limitRotation: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

swiperAnimation();
