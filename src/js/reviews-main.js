import { fetchReviews } from './api';
import { reviewNotFound, renderReviews } from './render-review';
import { BUTTON_NEXT, BUTTON_PREV, swiper } from './review-swiper';

async function getReviews() {
  try {
    const reviews = await fetchReviews();
    const totalItems = reviews.length;
    if (totalItems === 0) {
      reviewNotFound();
    } else {
      renderReviews(reviews);
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}
const nextObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BUTTON_NEXT.classList.contains('swiper-button-disabled');
      if (disabled) {
        BUTTON_NEXT.style.opacity = '0.5';
        BUTTON_NEXT.style.cursor = 'not-allowed';
      } else {
        BUTTON_NEXT.style.opacity = '1';
        BUTTON_NEXT.style.cursor = 'pointer';
      }
    }
  });
});

nextObserver.observe(BUTTON_NEXT, { attributes: true });

const prevObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = BUTTON_PREV.classList.contains('swiper-button-disabled');
      if (disabled) {
        BUTTON_PREV.style.opacity = '0.5';
        BUTTON_PREV.style.cursor = 'not-allowed';
      } else {
        BUTTON_PREV.style.opacity = '1';
        BUTTON_PREV.style.cursor = 'pointer';
      }
    }
  });
});

prevObserver.observe(BUTTON_PREV, { attributes: true });

getReviews();
