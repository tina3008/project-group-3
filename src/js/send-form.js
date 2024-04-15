const form = document.querySelector('#footer-form');
const sendBtn = document.querySelector('#send-button');
const userEmailField = document.querySelector('#user-email');

function clearFormFields() {
  const fieldName = form.querySelector('input[type="text"]');
  const fieldEmail = form.querySelector('input[type="email"]');
 

  fieldName.value = '';
  fieldEmail.value = '';

}

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = {};

  sendBtn.setAttribute('disabled', true);
  sendBtn.style.opacity = '0.7';
  let form = document.querySelector('#footer-form');

  form.reset();

  const modalOpen= document.querySelector('#modal-open')
  modalOpen.classList.add("is-open");
  
});
