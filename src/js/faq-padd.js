const faqListItems = document.querySelectorAll('.faq-list-item');

faqListItems.forEach(function (item, index) {
  if ((index + 1) % 2 === 0) {
    item.style.paddingLeft = '20px';
  }
});
