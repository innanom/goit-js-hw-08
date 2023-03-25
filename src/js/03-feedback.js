import throttle from 'lodash.throttle'

const formEl = document.querySelector('.feedback-form')
const messageEl = document.querySelector('textarea[name="message"]')
const emailInputEl = document.querySelector('input[type="email"]')
const messageInputEl = document.querySelector('textarea[name="message"]')

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onDataInput, 500));

let dataForm = {};
savedDataInput();

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log(dataForm);
}

function onDataInput(event) {
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function savedDataInput() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        dataForm = JSON.parse(savedData);
        emailInputEl.value = dataForm.email;
        messageInputEl.value =  dataForm.message;
    }
}