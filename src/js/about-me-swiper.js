import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutMeSwiperBox = document.querySelector('.swiper');
const aboutMeNextButton = document.querySelector('.swiper-next-button');

const swiper = new Swiper(aboutMeSwiperBox, {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: aboutMeNextButton,
  },
  loop: true,
  direction: 'horizontal',
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 'auto',
    },
  },
});
swiper.update();
const firstSlide = document.querySelector('.swiper-slide:first-child');

firstSlide.style.backgroundColor = 'rgb(237, 59, 68)';

swiper.on('slideChangeTransitionStart', () => {
  const currentIndex = swiper.activeIndex;

  const previousSlide = swiper.slides[currentIndex - 1];

  if (previousSlide) {
    previousSlide.style.backgroundColor = 'initial';
  }

  const currentSlide = swiper.slides[currentIndex];

  currentSlide.style.backgroundColor = 'rgb(237, 59, 68)';
});
