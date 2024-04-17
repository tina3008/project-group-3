import { fetchRequests } from "./api";
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

function validation() {
    const form = document.querySelector(".footer-form");
    const email = document.querySelector(".footer-email");
    const emailValue = email.value;
    const text = document.querySelector(".validation-text");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailValue.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Success!";
        text.style.color = "rgb(60, 188, 129)";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Invalid email, try again";
        text.style.color = "rgb(231, 74, 59)";
    }
    if (emailValue === "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
    }
}

validation()