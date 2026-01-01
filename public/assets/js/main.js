// Nevigation menu
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
document.addEventListener("click", (event) => {
  if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.add("hidden");
  }
});
