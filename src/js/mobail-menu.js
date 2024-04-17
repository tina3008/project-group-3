// mobail window ++++++++++++++
const mobileWindow = document.querySelector('#mobail-menu');
const mobailBtn = document.querySelector('#mobiail-btn');
const burgerBtn = document.querySelector('#burger');

burgerBtn.addEventListener('click', e => {
  e.preventDefault();
  mobileWindow.classList.toggle('is-open');
});

mobailBtn.addEventListener('click', e => {
  e.preventDefault();
  mobileWindow.classList.toggle('is-open');
});
