const reviewsList = document.querySelector('.reviews-list');

function templateReview(_id, author, avatar_url, review) {
  return `
     <li class="reviews-list-items swiper-slide" data-id="${_id}">
     <img class="reviews-image" src="${avatar_url}" alt="Photo" 
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

export function reviewNotFound() {
  const markup = '<p class="end-message">Not found</p>';
  reviewsList.insertAdjacentHTML('afterend', markup);
}

function templateReviews(reviews) {
  return reviews
    .map(({ _id, author, avatar_url, review }) =>
      templateReview(_id, author, avatar_url, review)
    )
    .join('');
}

export function renderReviews(reviews) {
  const markup = templateReviews(reviews);
  reviewsList.insertAdjacentHTML('beforeend', markup);
}
