import { fetchReviews } from './api';

const reviewsList = document.querySelector('.reviews-list');

function templateReview(_id, author, avatar_url, review) {
  return `
     <li class="reviews-list-items swiper-slide" data-id="${_id}">
     <img class="reviews-image" src="${avatar_url}" alt="" 
            width="48"
            height="48"
            loading="lazy" />
          <div class="reviews-text-content">
            <h3 class="reviews-name-header">${author}</h3>
            <p class="reviews-main-text">${review}</p>
          </div>
        </li>
  `;
}

function reviewNotFound() {
  const endMessage = document.createElement('p');
  endMessage.classList.add('end-message');
  endMessage.textContent = 'Not found';
  reviewsList.insertAdjacentElement('afterend', endMessage);
}

function templateReviews(reviews) {
  return reviews
    .map(({ _id, author, avatar_url, review }) =>
      templateReview(_id, author, avatar_url, review)
    )
    .join('');
}

function renderReviews(reviews) {
  const markup = templateReviews(reviews);
  reviewsList.insertAdjacentHTML('beforeend', markup);
}

async function getReviews() {
  try {
    const reviews = await fetchReviews();
    if (reviews.length === 0) {
      reviewNotFound();
    } else {
      renderReviews(reviews);
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

getReviews();
