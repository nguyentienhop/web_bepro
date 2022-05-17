const togger = document.querySelector(".nav-togger");
console.log(togger);
if (togger) {
  togger.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
}
//slider
$(".hero-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  items: 1,
  smartSpeed: 1000,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
});
//portfolio
$(".portfolio-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 24,
  smartSpeed: 1000,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
//review
$(".reviews-slider").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 24,
  smartSpeed: 1000,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 2,
    },
  },
});
//nav-bar
const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  let y = window.pageYOffset;
  if (y > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});