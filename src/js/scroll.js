// modal window ++++++++++++++
const modalWindow = document.querySelector("#modal-open");
const modalBtn = document.querySelector("#modalBtn");
const openModal = document.querySelector("#send-button");

modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalWindow.classList.remove("is-open");
});

openModal.addEventListener("submit", (e) => {
  modalWindow.classList.add("is-open");
});