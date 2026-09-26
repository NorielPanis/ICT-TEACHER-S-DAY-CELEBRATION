const navbar = document.querySelector("nav");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

const scrollDown = document.getElementById("scroll-down");
const arrow = document.getElementById("scroll-arrow");

if (scrollDown && arrow) {
  scrollDown.addEventListener("mouseenter", () => {
    arrow.classList.add("bouncing");
  });

  scrollDown.addEventListener("mouseleave", () => {
    arrow.classList.remove("bouncing");
  });
}

const hamburgerBtn = document.getElementById("hamburger-btn");
const navEl = document.querySelector("nav");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = navEl.classList.toggle("nav-open");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
  document.body.classList.toggle("nav-locked", isOpen);
});

document.querySelectorAll("#nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    navEl.classList.remove("nav-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navEl.classList.contains("nav-open")) {
    navEl.classList.remove("nav-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  }
});
