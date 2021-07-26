const body = document.querySelector('body');
const handleClick = (event) => {
  console.log(event.target.textContent);
};
body.addEventListener('click', handleClick);
