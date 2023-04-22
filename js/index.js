const linkOne = document.getElementById("linkOne");
const linkTwo = document.getElementById("linkOne");
const modal = document.getElementById("modal");
const hamburgerModal = document.getElementById("hamburger-modal");

modal.addEventListener("click", function () {
  hamburgerModal.classList.toggle("show");
});
