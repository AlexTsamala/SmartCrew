console.log('Hello World');

import data from "./data.json" assert {type: 'json'}

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm');
const createBtn = document.querySelector('#create-btn');
const inputStyle = document.querySelector('.input-style');
const warningPEmail = document.querySelector('.warning-p-email');
const warningPPassword = document.querySelector('.warning-p-password');
const warningPConfirm = document.querySelector('.warning-p-confirm');
const emailIcon =document.querySelector('.email-icon');
const formOfEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


createBtn.addEventListener('click', ()=> {
    let emailValue = emailInput.value;
    let passwprdValue = passwordInput.value;
    let confirmValue = confirmInput.value;
    // if condition: when input is empty appear warning
    if (emailValue == 0 ) {
        warningPEmail.classList.remove('display-none-email');
        emailIcon.classList.add('second-position-email');
        emailInput.classList.add('empty-input-warning');
    }
    if (passwprdValue == 0) {
        warningPPassword.classList.remove('display-none-password');
        emailIcon.classList.add('second-position-password');
        passwordInput.classList.add('empty-input-warning');
    }
    if (confirmValue == 0) {
        warningPConfirm.classList.remove('display-none-confirm');
        emailIcon.classList.add('second-position-confirm');
        confirmInput.classList.add('empty-input-warning')
    }
    // if condition: when input doesn't match email form
    if (!emailValue.match(formOfEmail)) {
        warningPEmail.classList.remove('display-none-email');
        emailIcon.classList.add('second-position');
        emailInput.classList.add('empty-input-warning');
        warningPEmail.textContent = "Doesn't match email form";
    }
    // if condition: when password input is less than 8 chars
    if (passwprdValue.length < 8) {
        warningPConfirm.classList.remove('display-none-confirm');
        emailIcon.classList.add('second-position-confirm');
        confirmInput.classList.add('empty-input-warning')
        warningPPassword.classList.remove('display-none-password');
        emailIcon.classList.add('second-position-password');
        passwordInput.classList.add('empty-input-warning');
        warningPPassword.textContent = 'Must be 8 characters';
        warningPConfirm.textContent = 'Must be 8 characters';
    }
    // if condition: when passwords doesn't match
    if (passwprdValue != confirmValue) {
        warningPConfirm.classList.remove('display-none-confirm');
        emailIcon.classList.add('second-position-confirm');
        confirmInput.classList.add('empty-input-warning')
        warningPConfirm.textContent = "Passwords doesn't match";
    }

    data.profiles.push({emailValue, passwprdValue});
    console.log(data);
    // console.log(emailValue);
    // console.log(passwprdValue);
    // console.log(confirmValue);

    // data.profiles.find((item) => item.username === );

});






