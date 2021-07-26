const btn = document.querySelector('.single-use-btn');
const clickHandler = () => {
  console.log('clicked');
};
btn.addEventListener('click', clickHandler, { once: true });
