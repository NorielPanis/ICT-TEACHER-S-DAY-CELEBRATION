const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const scrollDown = document.getElementById("scroll-down");
const arrow = document.getElementById("scroll-arrow");

scrollDown.addEventListener("mouseenter", () => {
  arrow.classList.add("bouncing");
});

scrollDown.addEventListener("mouseleave", () => {
  arrow.classList.remove("bouncing");
});
