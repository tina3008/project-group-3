document.getElementById("profile-link").addEventListener("click", function(event) {
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

function toggleMenuMobile() {
  menuContainerMobile.classList.toggle('active');
}

menuToggleMobile.addEventListener('click', toggleMenuMobile);

// Handle desktop menu toggle (if triggered by profile-link)
menuToggleDesktop.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  const dropdownDesktop = document.getElementById('dropdown'); // Assuming dropdown for desktop menu

  if (menuContainerMobile.classList.contains('active')) {
    // Close mobile menu if open
    menuContainerMobile.classList.remove('active');
  } else {
    // Open/close desktop menu
    dropdownDesktop.classList.toggle('active');
    dropdownDesktop.style.opacity = dropdownDesktop.classList.contains('active') ? 1 : 0;

    // Optionally, adjust other elements for desktop menu activation (e.g., background color, button styles)
  }
});
document.addEventListener('click', function(event) {
  if (!menuContainerMobile.contains(event.target) && !menuToggleMobile.contains(event.target)) {
    menuContainerMobile.classList.remove('active');
  }
});
