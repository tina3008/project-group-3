import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const swiperContainer = document.querySelector('.swiper-container');

// const swiper = new Swiper(swiperContainer, {
//   modules: [Navigation],
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   slidesPerView: 1,
//   autoHeight: false,
//   spaceBetween: 16,
//   watchOverflow: true,
//   centeredSlides: true,
//   slidesPerGroup: 1,
//   autoWidth: false,
// });
const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  direction: 'horizontal',
  spaceBetween: 24,
  autoHeight: false,
  autoWidth: false,
  centeredSlides: true,
  watchOverflow: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
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
    1440: {
      slidesPerView: 4,
    },
  },
});
swiper.updateSlides();
