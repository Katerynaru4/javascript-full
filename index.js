const btn = document.querySelector('.single-use-btn');
const clickHandler = () => {
  console.log('clicked');
  btn.removeEventListener('click', clickHandler);
};
btn.addEventListener('click', clickHandler);
