import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const swiperContainer = document.querySelector('.swiper');
export const BUTTON_NEXT = document.querySelector('.button-next-svg');
export const BUTTON_PREV = document.querySelector('.button-prev');

export const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard, Pagination],
  navigation: {
    nextEl: BUTTON_NEXT,
    prevEl: BUTTON_PREV,
  },

  direction: 'horizontal',
  spaceBetween: 22,
  autoHeight: false,
  autoWidth: false,
  centeredSlides: true,
  // watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    767: {
      slidesPerView: 2,
    },
    1439: {
      slidesPerView: 4,
    },
  },
});

swiper.update();

// function buttonDisable() {
//   const items = document.querySelectorAll('.reviews-list');
//   const currentIndex = swiper.realIndex;
//   const totalItems = items.length;

//   if (currentIndex === totalItems - 1) {
//     disableButtonNext();
//     console.log('Останній елемент');
//   } else if (totalItems === 0) {
//     disableButtonPrevious();
//   }

//   if (BUTTON_NEXT) {
//     BUTTON_NEXT.classList.add('last-button');
//   }
// }
// buttonDisable();