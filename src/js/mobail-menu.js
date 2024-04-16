// mobail window ++++++++++++++
const burgerButton = document.getElementById('burger-menu');
const modalWindow = document.getElementById('mobail-menu');

burgerButton.addEventListener('click', function () {
  this.classList.toggle('close');
  modalWindow.classList.toggle('is-open');
});
