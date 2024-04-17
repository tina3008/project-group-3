import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperBox = document.querySelector('.projects-section > .swiper');
export const nextBtn = document.querySelector('.next-btn');
export const prevBtn = document.querySelector('.prev-btn');


const swiperProjects = new Swiper(swiperBox, {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn,
  },
  direction: 'horizontal',
  centeredSlides: true,
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  slidesPerView: 1,
});

const nextBtnObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = nextBtn.classList.contains('swiper-button-disabled');
      if (disabled) {
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
      } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
      }
    }
  });
});

nextBtnObserver.observe(nextBtn, { attributes: true });

const prevBtnObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = prevBtn.classList.contains('swiper-button-disabled');
      if (disabled) {
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
      } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
      }
    }
  });
});

prevBtnObserver.observe(prevBtn, { attributes: true });
