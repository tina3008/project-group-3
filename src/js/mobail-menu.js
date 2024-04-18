// mobail window ++++++++++++++
const mobileWindow = document.querySelector('#mobail-menu');
const mobailBtn = document.querySelector('#mobiail-btn');
const burgerBtn = document.querySelector('#burger');
const bodyHiden = document.querySelector('body');

burgerBtn.addEventListener('click', e => {
  e.preventDefault(); 
  bodyHiden.classList.toggle('.visually-hidden');
  mobileWindow.classList.toggle('is-open');
});

mobailBtn.addEventListener('click', e => {
  e.preventDefault();

  bodyHiden.classList.remove('visually-hidden');
  mobileWindow.classList.toggle('is-open');

});
