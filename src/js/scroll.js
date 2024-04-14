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

const linkBenefits = document.querySelector('.benefit-footer');
const footerSection = document.querySelector('#work-together-section');

linkBenefits.addEventListener('click', e=> {
    e.preventDefault();
    footerSection.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
});