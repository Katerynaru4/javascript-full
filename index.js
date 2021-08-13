const baseUrl = 'https://61166547d98aef0017fe29cd.mockapi.io/usersForm';

const submitBtnElem = document.querySelector('.submit-button');
const loginFormElem = document.querySelector('.login-form');
const InputFormElems = document.querySelectorAll('.form-input');
const emailInputElem = document.querySelector('.form-input[name="email"]');
const nameInputElem = document.querySelector('.form-input[name="name"]');
const passwordInputElem = document.querySelector(
  '.form-input[name="password"]'
);
const errorTextElem = document.querySelector('.error-text');

const onSubmitForm = (e) => {
  e.preventDefault();

  const newUser = {
    email: emailInputElem.value,
    name: nameInputElem.value,
    password: passwordInputElem.value,
  };

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((response) => alert(JSON.stringify(response)))
    .then(() => {
      [...InputFormElems].map((el) => {
        el.value = '';
      });
    })
    .catch(() => {
      errorTextElem.textContent = new Error('Failed to create user');
    });
};

const onChangeInput = (e) => {
  errorTextElem.textContent = '';
  submitBtnElem.disabled = !loginFormElem.reportValidity();
};

loginFormElem.addEventListener('submit', onSubmitForm);
loginFormElem.addEventListener('input', onChangeInput);
