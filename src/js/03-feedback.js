import { getStorageData, setStorageData } from "../helpers/storage"

var throttle = require('lodash.throttle');


const form = document.querySelector("form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', addNewSubmit);

let listData = getStorageData('feedback-form-state') || {};

refresh();

function onInput() {
listData = { email: email.value, message: message.value };
setStorageData('feedback-form-state', listData);
}

function refresh() {
    // console.log(listData.email);
    // console.log(listData.message);
email.value = listData.email || '';
message.value = listData.message || '';
}

function addNewSubmit(evt) {
evt.preventDefault();
if (!email.value || !message.value) {
    return alert('Both fields must be filled');
}
let forConsole = { email: email.value, message: message.value };
console.log(forConsole);
localStorage.removeItem('feedback-form-state');
evt.currentTarget.reset();
forConsole = {};
}


