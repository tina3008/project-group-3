document.addEventListener("DOMContentLoaded", function() {
  // Получаем ссылку на меню и на выпадающее меню
  const profileLink = document.getElementById("profile-link");
  const dropdown = document.getElementById("dropdown");
  const menuLinks = document.querySelectorAll(".menu-link-mobile");

  // Добавляем обработчик клика на ссылку меню
  profileLink.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("profile").classList.toggle("active");
  
    const dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
      dropdown.style.opacity = 0;
    } else {
      dropdown.classList.add("active");
      setTimeout(() => {
        dropdown.style.opacity = 1;
      }, 10); 
    }
  });

  const menuToggleMobile = document.querySelector('.header-mobile-menu-open-btn');
const menuToggleDesktop = document.getElementById('profile-link'); // Assuming this triggers desktop menu
const menuContainerMobile = document.querySelector('.menu-container-mobile');
const dropdownMobile = document.getElementById('dropdown-mobile');

// function toggleMenuMobile() {
//   menuContainerMobile.classList.toggle('active');
// }

// menuToggleMobile.addEventListener('click', toggleMenuMobile);

// menuToggleDesktop.addEventListener('click', function(event) {
//   event.preventDefault(); 

//   const dropdownDesktop = document.getElementById('dropdown'); 

//   if (menuContainerMobile.classList.contains('active')) {
//     menuContainerMobile.classList.remove('active');
//   } else {
//     dropdownDesktop.classList.toggle('active');
//     dropdownDesktop.style.opacity = dropdownDesktop.classList.contains('active') ? 1 : 0;
//   }
// });
// document.addEventListener('click', function(event) {
//   if (!menuContainerMobile.contains(event.target) && !menuToggleMobile.contains(event.target)) {
//     menuContainerMobile.classList.remove('active');
//   }
// });
