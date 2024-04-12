// modal window ++++++++++++++
const modalWindow = document.querySelector("#modal-open");
const modalBtn = document.querySelector("#modalBtn");

modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalWindow.classList.remove("is-open");
});
