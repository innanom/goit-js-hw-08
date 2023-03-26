import throttle from 'lodash.throttle'

const formEl = document.querySelector('.feedback-form')
const messageEl = document.querySelector('textarea[name="message"]')
const emailInputEl = document.querySelector('input[type="email"]')
const messageInputEl = document.querySelector('textarea[name="message"]')

// const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onDataInput, 500));
formEl.addEventListener('submit', onFormSubmit);


let dataForm = {};
savedDataInput();

function onFormSubmit(event) {
    if (emailInputEl.value === "" || messageInputEl.value === "") {
    alert('Всі поля мають бути заповнені');
        return;
  }
    event.preventDefault();
    console.log(dataForm);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
   
}

function onDataInput(event) {
    dataForm[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
    
}

function savedDataInput() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        dataForm = JSON.parse(savedData);
        emailInputEl.value = dataForm.email || "";
        messageInputEl.value =  dataForm.message || "";
    }
}