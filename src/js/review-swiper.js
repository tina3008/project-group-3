import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const swiperContainer = document.querySelector('.swiper');

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
  modules: [Navigation],
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  direction: 'horizontal',
  effect: 'slide',

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
