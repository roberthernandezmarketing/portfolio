// ------------------------------------ //
// Menu hamburguer open-close & bottons //
// ------------------------------------ //
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// ----------------------------------- //
// Animations from scrollrevealjs.org  //
// ----------------------------------- //
const scrollRevealOption = {
  distance: "10px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal("hr", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience__list li", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".wrapper-skills", {
  ...scrollRevealOption,
  interval: 500,
});

// By Rob Hernandez @KreativeDevLab
// 