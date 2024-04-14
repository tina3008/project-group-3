import Accordion from 'accordion-js';

const accordionButtonTrigger = document.querySelector(".ac-trigger")


new Accordion(".accordion-container", {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
})

