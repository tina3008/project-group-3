import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list-accordion-container', {
  duration: 600,
  showMultiple: true,
});

document.addEventListener('click', function (event) {
  const clickedButton = event.target.closest('.ac-trigger');

  if (!clickedButton) return;

  event.preventDefault();

  const clickedLi = clickedButton.closest('.ac');
  const svgUse = clickedButton.querySelector('use');

  if (clickedLi.classList.contains('is-active')) {
    svgUse.setAttribute('href', '../img/faq-svg/faq.svg#icon-arrow-up');
  } else {
    svgUse.setAttribute('href', '../img/faq-svg/faq.svg#icon-arrow-down');
  }
});
