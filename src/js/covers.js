const coversSection = document.querySelector('.covers');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.image-box-item').forEach(item => {
          item.classList.add('covers-animation');
        });
      } else {
        entry.target.querySelectorAll('.image-box-item').forEach(item => {
          item.classList.remove('covers-animation');
        });
      }
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(coversSection);
