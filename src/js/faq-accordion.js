import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import arrowDownIcon from '../img/sprite.svg#icon-btn-dwn';
import arrowUpIcon from '../img/sprite.svg#icon-btn-up';

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
    svgUse.setAttribute('href', arrowUpIcon);
  } else {
    svgUse.setAttribute('href', arrowDownIcon);
  }
});

// document.addEventListener('click', function (event) {
//   const clickedButton = event.target.closest('.ac-trigger');
//   if (!clickedButton) return;
//   event.preventDefault();

//   const clickedLi = clickedButton.closest('.ac');
//   const svgUse = clickedButton.querySelector('use');
//   const svgHref = svgUse.getAttribute('href');

//   if (clickedLi.classList.contains('is-active')) {
//     svgUse.setAttribute(
//       'href',
//       svgHref.replace('#icon-arrow-down', '#icon-arrow-up')
//     );
//   } else {
//     svgUse.setAttribute(
//       'href',
//       svgHref.replace('#icon-arrow-up', '#icon-arrow-down')
//     );
//   }
// });
