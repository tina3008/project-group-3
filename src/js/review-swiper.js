import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const swiperContainer = document.querySelector('.swiper');

const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard, Pagination],
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
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
    1440: {
      slidesPerView: 4,
    },
  },
});
swiperContainer.slideNext();
swiper.params.cssMode = true;
swiper.params.scrollbar = {
  el: '.swiper-scrollbar',
  draggable: true,
};
swiper.update();
document.querySelector('.swiper-wrapper').style.transform =
  'translate3d(-55px, 0px, 0px)';
