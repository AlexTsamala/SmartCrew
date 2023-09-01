console.log('Hello world');

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const saveBtn = document.querySelector('#save-btn');
const warningFirstname = document.querySelector('.warning-p-firstname')
const warningLastname = document.querySelector('.warning-p-lastname');
const warningEmail = document.querySelector('.warning-p-email');
const warningPEmail = document.querySelector('.warning-p-email');
const formOfEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

saveBtn.addEventListener('click', ()=> {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;

    // if condition: when input is empty appear warning
    if (firstNameValue == 0 ) {
        warningFirstname.classList.remove('display-none-firstname');
        firstName.classList.add('empty-input-warning');
        firstName.classList.add('second-position-firstname');
    }
    if (lastNameValue == 0 ) {
        warningLastname.classList.remove('display-none-lastname');
        lastName.classList.add('empty-input-warning');
        lastName.classList.add('second-position-lastname');
    }
    // if condition: when input doesn't match email form
    if (!emailValue.match(formOfEmail)) {
        warningPEmail.classList.remove('display-none-email');
        email.classList.add('empty-input-warning');
        email.classList.add('second-position-email');
        warningPEmail.textContent = "Doesn't match email form";
    }
    if (emailValue == 0 ) {
        warningEmail.classList.remove('display-none-email');
        email.classList.add('empty-input-warning');
        email.classList.add('second-position-email');
        warningPEmail.textContent = "Can't be empty";
    }

    // console.log(firstNameValue);
    // console.log(lastNameValue);
    // console.log(emailValue);
});
