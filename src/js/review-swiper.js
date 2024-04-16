import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const swiperContainer = document.querySelector('.swiper.swiper-one');
export const BUTTON_NEXT = document.querySelector('.button-next-svg');
export const BUTTON_PREV = document.querySelector('.button-prev');

export const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard, Pagination],
  navigation: {
    nextEl: BUTTON_NEXT,
    prevEl: BUTTON_PREV,
  },

  direction: 'horizontal',
  autoHeight: false,
  autoWidth: false,

  // centeredSlides: true,
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 18,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

swiper.update();
