const navbar_wrapper = document.querySelector(".navbar_wrapper");
const navbar_links = document.querySelector(".navbar_links");
const navbar_hamburger = document.querySelector(".navbar_hamburger");
const navbar_links_menue = document.querySelector(".navbar_links_menue");
const black_screen = document.querySelector(".black_screen");

navbar_hamburger.addEventListener("click", () => {
  navbar_links.classList.toggle("open");
  black_screen.classList.toggle("show");
});

navbar_links_menue.addEventListener("click", () => {
  navbar_links.classList.remove("open");
  black_screen.classList.remove("show");
});

black_screen.addEventListener("click", () => {
  navbar_links.classList.remove("open");
  black_screen.classList.remove("show");
});

// let lastScroll = 0;

// document.addEventListener("scroll", (e) => {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > 400) {
//     if (scrollTop > lastScroll) {
//       navbar_wrapper.style.opacity = ".2";
//       // navbar_wrapper.style.background = "rgb(244, 202, 76)";
//     } else {
//       navbar_wrapper.style.opacity = "1";
//     }
//     lastScroll = scrollTop;
//   }
// });
