const coversContainer = document.querySelector('.covers-container');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const imageBoxItems = entry.target.querySelectorAll('.image-box-item');
      if (entry.isIntersecting) {
        imageBoxItems.forEach(item => {
          item.classList.add('covers-animation');
        });
      } else {
        imageBoxItems.forEach(item => {
          item.classList.remove('covers-animation');
        });
      }
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(coversContainer);
