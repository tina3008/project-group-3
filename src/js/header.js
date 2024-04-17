document.addEventListener("DOMContentLoaded", function() {
  const profileLink = document.getElementById("profile-link");
  const dropdown = document.getElementById("dropdown");
  const menuLinks = document.querySelectorAll(".menu-link-mobile");

  profileLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleMenu();
  });

  menuLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      hideMenu();
    });
  });
  dropdown.addEventListener("click", function(event) {
    hideMenu();
  });
  document.addEventListener("click", function(event) {
    const target = event.target;
    if (!dropdown.contains(target) && !profileLink.contains(target)) {
      hideMenu();
    }
  });
});

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
