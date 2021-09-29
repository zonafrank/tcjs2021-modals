"use strict";

const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showModalBtns = document.querySelectorAll(".show-modal");

document.addEventListener("keyup", (e) => {
  e.key === "Escape" && !modal.classList.contains("hidden") && closeModal();
});

showModalBtns.forEach((showModalBtn) => {
  showModalBtn.addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
