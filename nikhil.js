function lenisuse() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

lenisuse();

let mm = gsap.matchMedia();

function laptopScreen() {
  mm.add("(min-width:1440px)", () => {
    let page1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 .box",
        scroller: "body",
        start: "bottom 70%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    page1.to(".page1 .box1", {
      opacity: 0,
      duration: 1,
      x: -450,
    });
    page1.to(".page1 .box2", {
      x: 450,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1 .box2",
        scroller: "body",
        start: "bottom 70%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    let page2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    page2.from(".page2 .box3", {
      y: -450,
      duration: 1,
      opacity: 0,
    });
    page2.from(".page2 .box4", {
      y: 450,
      opacity: 0,
      duration: 1,
    });
    page2.from(".page2 .box5", {
      y: -450,
      duration: 1,
      opacity: 0,
    });

    let page3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 40%",
        end: "top 15%",
        scrub: true,
      },
    });
    page3.from(
      ".page3 .box6",
      {
        x: 500,
        y: -500,
        duration: 1.2,
        opacity: 0,
      },
      "d"
    );
    page3.from(
      ".page3 .box7",
      {
        x: -500,
        y: 500,
        duration: 1.2,
        opacity: 0,
      },
      "d"
    );
    page3.from(
      ".page3 .box8",
      {
        x: 500,
        y: 500,
        duration: 1.2,
        opacity: 0,
      },
      "d"
    );
    page3.from(
      ".page3 .box9",
      {
        x: -500,
        y: -500,
        duration: 1.2,
        opacity: 0,
      },
      "d"
    );

    let page4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        start: "top 40%",
        end: "top 15%",
        scrub: true,
      },
    });
    page4.from(".page4 .box10", {
      y: -500,
      opacity: 0,
      duration: 0.89,
    });
  });
}

laptopScreen();

function swiperjs() {
  let swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      slideShadows: true,
      rotate: 150,
      depth: 300,
      stretch: 100,
      modifier: 1,
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
swiperjs();
