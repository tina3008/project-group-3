import { fetchRequests } from "./api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function toggleModal() {
    const modalWindow = document.querySelector("#modal-open");
    modalWindow?.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
}

function removeModal(e) {
    const modalWindow = document.querySelector("#modal-open");
    if (e.target === modalWindow) {
        toggleModal();
    }
}

async function loadModal() {
    try {
        const response = await fetch('./partials/modal.html');
        const modalHTML = await response.text();
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const closeButton = document.querySelector(".click-js");
        const modalWindow = document.querySelector("#modal-open");
        closeButton?.addEventListener('click', toggleModal);
        modalWindow?.addEventListener('click', removeModal);
    } catch (error) {
        console.error('Error loading modal:', error);
    }
}

function isEmailValid(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadModal();

    const footerButton = document.querySelector(".footer-button");
    const footerForm = document.querySelector(".footer-form");
    const footerEmail = document.querySelector(".footer-input.footer-email");
    const validationText = document.querySelector('.validation-text');

    if (footerEmail && validationText) {
        footerEmail.addEventListener('input', function () {
            if (isEmailValid(footerEmail.value)) {
                validationText.textContent = 'Success!';
                validationText.style.color = 'rgb(60, 188, 129)';
                footerEmail.style.marginTop = '19px';
            } else {
                validationText.textContent = 'Invalid email, try again';
                validationText.style.color = 'rgb(231, 74, 59)';
                footerEmail.style.marginTop = '19px';
            }
        });

        footerButton?.addEventListener('click', function () {
            validationText.textContent = '';
            footerEmail.style.marginTop = '';
        });
    };

    async function getRequests(event) {
        event.preventDefault();
        const footerComment = document.querySelector(".footer-input.footer-comment");
        const email = footerEmail?.value.trim();
        const comment = footerComment?.value.trim();

        if (!email) {
            iziToast.warning({
                color: 'orange',
                message: '⚠️ Please enter an email address.',
                position: 'topRight',
            });
            return;
        }

        if (!isEmailValid(email)) {
            iziToast.warning({
                color: 'orange',
                message: '⚠️ Please enter a valid email address.',
                position: 'topRight',
            });
            return;
        }

        if (!comment) {
            iziToast.warning({
                color: 'orange',
                message: '⚠️ Please enter a comment.',
                position: 'topRight',
            });
            return;
        }

        try {
            await fetchRequests({ email, comment });
            toggleModal();
            footerForm?.reset();
        } catch (error) {
            iziToast.error({
                color: 'red',
                message: '❌ Sorry, there was an error. Please try again later!',
                position: 'topRight',
            });
            console.error('Type of error:', error);
        }
    }

    footerForm?.addEventListener('submit', getRequests);
});