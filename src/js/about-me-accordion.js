import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion(".accordion-container", {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
});

