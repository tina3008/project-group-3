const menuToggleMobile = document.querySelector('.header-mobile-menu-open-btn');
const menuToggleDesktop = document.getElementById('profile-link'); // Assuming this triggers desktop menu
const menuContainerMobile = document.querySelector('.menu-container-mobile');
const dropdownMobile = document.getElementById('dropdown-mobile');

function toggleMenuMobile() {
  menuContainerMobile.classList.toggle('active');
}

menuToggleMobile.addEventListener('click', toggleMenuMobile);

menuToggleDesktop.addEventListener('click', function(event) {
  event.preventDefault(); 

  const dropdownDesktop = document.getElementById('dropdown'); // Assuming dropdown for desktop menu

  if (menuContainerMobile.classList.contains('active')) {
    menuContainerMobile.classList.remove('active');
  } else {
    dropdownDesktop.classList.toggle('active');
    dropdownDesktop.style.opacity = dropdownDesktop.classList.contains('active') ? 1 : 0;
  }
});
document.addEventListener('click', function(event) {
  if (!menuContainerMobile.contains(event.target) && !menuToggleMobile.contains(event.target)) {
    menuContainerMobile.classList.remove('active');
  }
});
  