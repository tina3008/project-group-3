import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion(".accordion-container", {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
})

document.addEventListener('click', function (event) {
  const clickedButton = event.target.closest('.ac-trigger-about-me');
  if (!clickedButton) return; 

  event.preventDefault();

  const icon = clickedButton.querySelector('.icon-about-me use');
  const iconHref = icon.getAttribute('href');

  if (clickedButton.classList.contains('is-active')) {
    icon.setAttribute(
      'href',
      iconHref.replace('#icon-arrow-up', '#icon-arrow-down')
    );
  } else {
    icon.setAttribute(
      'href',
      iconHref.replace('#icon-arrow-down', '#icon-arrow-up')
    );
  }

  clickedButton.classList.toggle('is-active');
});