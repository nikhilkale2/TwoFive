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
      "d",
    );
    page3.from(
      ".page3 .box7",
      {
        x: -500,
        y: 500,
        duration: 1.2,
        opacity: 0,
      },
      "d",
    );
    page3.from(
      ".page3 .box8",
      {
        x: 500,
        y: 500,
        duration: 1.2,
        opacity: 0,
      },
      "d",
    );
    page3.from(
      ".page3 .box9",
      {
        x: -500,
        y: -500,
        duration: 1.2,
        opacity: 0,
      },
      "d",
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

    let page5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page5",
        scroller: "body",
        start: "top 50%",
        end: "top 25%",
        scrub: true,
      },
    });
    page5.from(
      ".page5 .box5",
      {
        x: -300,
        duration: 1,
        opacity: 0,
      },
      "n",
    );
    page5.from(
      ".page5 .box6",
      {
        y: -300,
        opacity: 0,
        duration: 1,
      },
      "n",
    );
    page5.from(
      ".page5 .box7",
      {
        x: 300,
        duration: 1,
        opacity: 0,
      },
      "n",
    );

    let page6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page6",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    page6.from(
      ".page6 .box8",
      {
        x: -200,
        y: -200,
        opacity: 0,
        duration: 1.2,
      },
      "k",
    );
    page6.from(
      ".page6 .box9",
      {
        y: 300,
        duration: 1.2,
        opacity: 0,
      },
      "k",
    );
    page6.from(
      ".page6 .box10",
      {
        x: 200,
        y: 200,
        duration: 1.2,
        opacity: 0,
      },
      "k",
    );

    let page7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page7",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    page7.from(
      ".page7 .box11",
      {
        x: -300,
        opacity: 0,
        duration: 1.3,
      },
      "l",
    );
    page7.from(
      ".page7 .box12",
      {
        x: 300,
        duration: 1.2,
        opacity: 0,
      },
      "l",
    );
    let page8 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page8",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    page8.from(".page8 .box13", {
      x: 350,
      y: -450,
      duration: 1.3,
      opacity: 0,
    });

    let page9 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page9",
        scroller: "body",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });
    page9.from(
      ".page9 .box14",
      {
        x: -300,
        duration: 1.4,
        opacity: 0,
      },
      "m",
    );
    page9.from(
      ".page9 .box15",
      {
        x: -250,
        y: -250,
        duration: 1.4,
        opacity: 0,
      },
      "m",
    );
    page9.from(
      ".page9 .box16",
      {
        x: 250,
        y: -250,
        duration: 1.4,
        opacity: 0,
      },
      "m",
    );
    page9.from(
      ".page9 .box17",
      {
        x: 300,
        duration: 1.4,
        opacity: 0,
      },
      "m",
    );
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
