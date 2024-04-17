import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import arrowDownIcon from '../img/faq-svg/faq.svg#icon-arrow-down';
import arrowUpIcon from '../img/faq-svg/faq.svg#icon-arrow-up';

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
  const svgHref = svgUse.getAttribute('href');

  if (clickedLi.classList.contains('is-active')) {
    svgUse.setAttribute(
      'href',
      svgHref.replace('#icon-arrow-down', '#icon-arrow-up')
    );
  } else {
    svgUse.setAttribute(
      'href',
      svgHref.replace('#icon-arrow-up', '#icon-arrow-down')
    );
  }
});
