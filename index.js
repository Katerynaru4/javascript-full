export const finishForm = () => {
  const loginForm = document.querySelector('.login-form');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'login');
  loginForm.prepend(nameInput);
  const passwordInput = document.querySelector('[name="password"]');
  passwordInput.setAttribute('type', 'password');
};
