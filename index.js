const btns = [...document.querySelectorAll('.btn')];
const handleClick = (el) => {
  console.log(el.target.textContent);
};
btns.forEach((button) => {
  button.addEventListener('click', handleClick);
});
