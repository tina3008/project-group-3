import { fetchRequests } from "./api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const footerButton = document.querySelector(".footer-button");
const closeButton = document.querySelector(".click-js");
const modalWindow = document.querySelector("#modal-open");
const footerForm = document.querySelector(".footer-form");

function removeModal(e) {
    if (e.target === e.currentTarget) {
        modalWindow.classList.add('is-hidden');
    }
}

function toggleModal() {
    modalWindow.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
}

footerButton.addEventListener("click", toggleModal);

if (closeButton && modalWindow) {
    closeButton.addEventListener("click", toggleModal);
    modalWindow.addEventListener("click", removeModal);
}

async function getRequests(event) {
    event.preventDefault();
    const footerEmail = document.querySelector(".footer-email");
    const footerComment = document.querySelector(".footer-comment");
    let email = footerEmail.value;
    let comment = footerComment.value;
    try {
        await fetchRequests({ email, comment });
        toggleModal();
        footerForm.reset();
    } catch (error) {
        iziToast.error({
            color: 'red',
            message: '❌ Sorry, there is an error. Please try again later!',
            position: 'topRight',
        });
    }
}

footerForm.addEventListener('submit', getRequests)

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('user-email');
    const validationText = document.querySelector('.validation-text');

    emailInput.addEventListener('input', function () {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const emailValue = emailInput.value;

        if (pattern.test(emailValue)) {
            validationText.textContent = 'Success!';
            validationText.style.color = 'rgb(60, 188, 129)';
            emailInput.style.marginTop = '19px';
        } else {
            validationText.textContent = 'Invalid email, try again';
            validationText.style.color = 'rgb(231, 74, 59)';
            emailInput.style.marginTop = '19px';
        }
    });
    footerButton.addEventListener('click', function () {
        validationText.textContent = '';
        emailInput.style.marginTop = '';
    });
});