import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutMeSwiperBox = document.querySelector(".swipper-and-button-wraper > .swiper");
const aboutMeNextButton = document.querySelector('.swiper-next-button');

const swiper = new Swiper(aboutMeSwiperBox, {
  modules: [Navigation, Pagination],
});