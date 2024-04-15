import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutMeSwiperBox = document.querySelector(".swipper-and-button-wraper > .swiper");
const aboutMeNextButton = document.querySelector('.swiper-next-button');

const swiper = new Swiper(aboutMeSwiperBox, {
  modules: [Navigation, Pagination, Keyboard],

  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: aboutMeNextButton,
  },
  direction: 'horizontal',
  centeredSlides: true,
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
  slidesPerView: 1,
});