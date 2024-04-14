// modal window ++++++++++++++
// const modalWindow = document.querySelector("#modal-open");
// const modalBtn = document.querySelector("#modalBtn");
// const openModal = document.querySelector("#send-button");
// const sendForm = document.querySelector(".footer-form");

// modalBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   modalWindow.classList.remove("is-open");
// });

// sendForm.addEventListener("submit", (e) => {
//   modalWindow.classList.add("is-open");
// });

// scroll

// scroll benefit-footer

const linkBenefits = document.querySelector('.benefit-footer');
const footerSection = document.querySelector('#about');

linkBenefits.addEventListener('click', e=> {
    e.preventDefault();
   
    footerSection.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
});

// scroll from header

const headerMenu = document.querySelector('#dropdown');
const toBenefit = document.querySelector('#benefit-link');



headerMenu.addEventListener('click', e=> {
    e.preventDefault();
    const memuChoice = e.target.element;
  alert (memuChoice)
    toBenefit.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
});
