import { fetchRequests } from "./api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const footerButton = document.querySelector(".footer-button");
const closeButton = document.querySelector(".click-js");
const modalWindow = document.querySelector("[modal-open]");
const footerForm = document.querySelector(".footer-form");

async function getRequests() {
    try {
        const requests = await fetchRequests();
        const totalItems = requests.length;
        if (totalItems === 0) {
            iziToast.error({
                color: 'red',
                message: '❌ Sorry, there is an error. Please try again later!',
                position: 'topRight',
            });
        } else {
            footerButton.addEventListener('click', toggleModal);
            closeButton.addEventListener('click', toggleModal);
            modalWindow.addEventListener('click', removeModal);
            function removeModal(e) {
                if (e.target === e.currentTarget) {
                    modalWindow.classList.add('is-hidden');
                }
            }

            function toggleModal() {
                modalWindow.classList.toggle('is-hidden');
                document.body.classList.toggle('no-scroll');
            }
            footerForm.reset();
        }
    } catch (error) {
        iziToast.error({
            color: 'red',
            message: '❌ Sorry, there is an error. Please try again later!',
            position: 'topRight',
        });
    }
}

getRequests()

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
});
