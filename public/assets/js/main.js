// menu open-close
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const closeMenuButton = document.getElementById("close-menu-button");
function openMenu() {
  menu.style.display = "block";
}
function closeMenu() {
  menu.style.display = "none";
}
menuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

// fixed header
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const scrollPosition = window.scrollY;
  const triggerPoint = 20;
  if (scrollPosition > triggerPoint) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

// fixed announcement bar
window.addEventListener("scroll", function () {
  const announce = document.querySelector(".announcement-bar");
  const scrollPosition = window.scrollY;
  const triggerPoint = 20;
  if (scrollPosition > triggerPoint) {
    announce.classList.add("fixed-announcement-bar");
  } else {
    announce.classList.remove("fixed-announcement-bar");
  }
});

// fixed mobile-menu
window.addEventListener("scroll", function () {
  const header = document.querySelector("#menu");
  const scrollPosition = window.scrollY;
  const triggerPoint = 20;
  if (scrollPosition > triggerPoint) {
    header.classList.add("mobile-menu");
  } else {
    header.classList.remove("mobile-menu");
  }
});

// mobile menu animation
function toggleMenu() {
  menu.classList.toggle('animated');
}
menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", function() {
  menu.classList.remove('animated');
});
