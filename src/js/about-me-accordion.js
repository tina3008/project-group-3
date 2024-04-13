import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionButtonTrigger = document.querySelector(".ac-trigger")


new Accordion(".accordion-container", {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
  onOpen: () => {
    accordionButtonTrigger.classList.add("rotate");
  },
  onClose: () => {
    accordionButtonTrigger.classList.remove("rotate");
  }
})

