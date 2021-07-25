export const createButton = (buttonText) => {
  const button = document.createElement('button');
  button.innerText = buttonText;
  const body = document.querySelector('body');
  body.append(button);
};
