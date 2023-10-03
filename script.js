// product highlight in navbar
let products = document.querySelectorAll(".products");
products.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("products-active");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("products-active");
  });
});



// nav two active/ inactive
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let cross = document.querySelector(".cross");
let navTwo = document.querySelector(".nav2-container");

menuBtn.addEventListener("click", () => {
  navTwo.classList.toggle("nav2-container-active");
  Nav2Sec1.classList.toggle("nav2-sec1-active");
})

cross.addEventListener("click", () => {
  Nav2Sec1.classList.remove("nav2-sec1-active");
  navTwo.classList.toggle("nav2-container-active");
})






// searchbar active / inactive 
let search = document.querySelector(".search-1");
let search2 = document.querySelector(".search-2");
let searchClose = document.querySelector(".search-close");
let searchContainer = document.querySelector(".search-container");

search.addEventListener("click", () => {
  searchContainer.classList.toggle("search-container-active");
})

search2.addEventListener("click", () => {
  searchContainer.classList.toggle("search-container-active");
  Nav2Sec1.classList.remove("nav2-sec1-active");
  navTwo.classList.remove("nav2-container-active");
})

searchClose.addEventListener("click", () => {
  searchContainer.classList.toggle("search-container-active");
})






// nav two sec active/ inactive
let link1 = document.querySelector(".link-1");
let link2 = document.querySelector(".link-2");
let link3 = document.querySelector(".link-3");
let link4 = document.querySelector(".link-4");
let link5 = document.querySelector(".link-5");
let Nav2Sec1 = document.querySelector(".nav2-sec1");
let nav2LinksContainer = document.querySelectorAll(".nav2-links-container")

link1.addEventListener("mouseover", () => {
  nav2LinksContainer.forEach((e) => {
    e.classList.remove("nav2-links-container-active");
  })
  link1.classList.add("nav2-links-container-active");
  Nav2Sec1.classList.add("nav2-sec1-active");
})

link2.addEventListener("mouseover", () => {
  Nav2Sec1.classList.remove("nav2-sec1-active");
  nav2LinksContainer.forEach((e) => {
    e.classList.remove("nav2-links-container-active");
  })
  link2.classList.add("nav2-links-container-active");
})
link3.addEventListener("mouseover", () => {
  Nav2Sec1.classList.remove("nav2-sec1-active");
  nav2LinksContainer.forEach((e) => {
    e.classList.remove("nav2-links-container-active");
  })
  link3.classList.add("nav2-links-container-active");
})
link4.addEventListener("mouseover", () => {
  Nav2Sec1.classList.remove("nav2-sec1-active");
  nav2LinksContainer.forEach((e) => {
    e.classList.remove("nav2-links-container-active");
  })
  link4.classList.add("nav2-links-container-active");
})
link5.addEventListener("mouseover", () => {
  Nav2Sec1.classList.remove("nav2-sec1-active");
  nav2LinksContainer.forEach((e) => {
    e.classList.remove("nav2-links-container-active");
  })
  link5.classList.add("nav2-links-container-active");
})


// main-nav hide on scroll
let nav = document.querySelector(".nav-container");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    console.log("yes")
    gsap.to(".nav-container", {
      y: "-100%",
    })
  }
  else {
    console.log("no")
    gsap.to(".nav-container", {
      y: "0%",
    })
  }
  lastScrollY = window.scrollY;
});


/***************************swiper js start ****************************/
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/***************************swiper js end ****************************/

/**************************** gsao start ****************************/

gsap.from(".top-in", {
  y: -100,
  opacity: 0,
  duration: .5,
})

gsap.from(".hero-h4, .hero-h1, .hero-p, .hero-btn, .hero-hr", {
  x: "50%",
  duration: 0.5,
  opacity: 0,
  delay: 0,
  stagger: .1,
})

gsap.from(".bottom-in", {

  x: 100,
  opacity: 0,
  duration: .5,

  scrollTrigger: {
    trigger: ".section-two",
    scroller: "body",
    start: "top 80%",
    // markers: true
  }
})

gsap.from(".left-1-h1, .left-1-p, .left-1-a, .left-1-hr", {

  x: "50%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
  delay: 0,

  scrollTrigger: {
    trigger: ".left-1",
    scroller: "body",
    start: "top 80%",
  }
})
gsap.from(".left-2-h1, .left-2-p, .left-2-a, .left-2-hr", {

  x: "50%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
  delay: 0,

  scrollTrigger: {
    trigger: ".left-2",
    scroller: "body",
    start: "top 80%",
  }
})
gsap.from(".left-3-h1, .left-3-p, .left-3-a, .left-3-hr", {

  x: "50%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
  delay: 0,

  scrollTrigger: {
    trigger: ".left-3",
    scroller: "body",
    start: "top 80%",
  }
})

gsap.from(".right-1-h1, .right-1-p, .right-1-a, .right-1-hr", {

  x: "50%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
  delay: 0,

  scrollTrigger: {
    trigger: ".right-1",
    scroller: "body",
    start: "top 80%",
  }
})
gsap.from(".right-2-h1, .right-2-p, .right-2-a, .right-2-hr", {

  x: "50%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
  delay: 0,

  scrollTrigger: {
    trigger: ".right-2",
    scroller: "body",
    start: "top 80%",
  }
})
gsap.from(".right-3-h1, .right-3-p, .right-3-a, .right-3-hr", {

  x: "50%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
  delay: 0,

  scrollTrigger: {
    trigger: ".right-3",
    scroller: "body",
    start: "top 80%",
  }
})
gsap.from(".right-4-h1, .right-4-p, .right-4-a, .right-4-hr", {

  x: "50%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
  delay: 0,

  scrollTrigger: {
    trigger: ".right-4",
    scroller: "body",
    start: "top 80%",
  }
})

gsap.from(".subfooter", {

  x: 100,
  opacity: 0,
  duration: .5,

  scrollTrigger: {
    trigger: ".subfooter",
    scroller: "body",
    start: "top 80%",
  }
})

gsap.from(".footer-container", {

  x: 100,
  opacity: 0,
  duration: .5,

  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 80%",
  }
})

/**************************** gsao end ****************************/