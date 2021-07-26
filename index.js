const body = document.querySelector('body');
const handleClick = (e) => {
  console.log(e.target.textContent);
};
body.addEventListener('click', handleClick);
