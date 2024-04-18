document.addEventListener("DOMContentLoaded", function() {
  // Получаем ссылку на меню и на выпадающее меню
  const profileLink = document.getElementById("profile-link");
  const dropdown = document.getElementById("dropdown");
  const menuLinks = document.querySelectorAll(".menu-link-mobile");

  // Добавляем обработчик клика на ссылку меню
  profileLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleMenu();
  });

  // Добавляем обработчик клика на все пункты меню
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      hideMenu();
    });
  });

  // Добавляем обработчик клика на всё меню
  dropdown.addEventListener("click", function(event) {
    hideMenu();
  });

  // Добавляем обработчик клика на всё окно документа
  document.addEventListener("click", function(event) {
    const target = event.target;
    // Проверяем, является ли цель клика частью меню или не её частью
    if (!dropdown.contains(target) && !profileLink.contains(target)) {
      hideMenu();
    }
  });
});

// Функция для открытия/закрытия меню
function toggleMenu() {
  const profile = document.getElementById("profile");
  const dropdown = document.getElementById("dropdown");
  profile.classList.toggle("active");
  dropdown.classList.toggle("active");
  if (dropdown.classList.contains("active")) {
    dropdown.style.opacity = 1;
  } else {
    dropdown.style.opacity = 0;
  }
}

// Функция для закрытия меню
function hideMenu() {
  const profile = document.getElementById("profile");
  const dropdown = document.getElementById("dropdown");
  profile.classList.remove("active");
  dropdown.classList.remove("active");
  dropdown.style.opacity = 0;
}


  const menuToggleMobile = document.querySelector('.header-mobile-menu-open-btn');
const menuToggleDesktop = document.getElementById('profile-link'); // Assuming this triggers desktop menu
const menuContainerMobile = document.querySelector('.menu-container-mobile');
const dropdownMobile = document.getElementById('dropdown-mobile');

