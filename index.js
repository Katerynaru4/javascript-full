const paginationPages = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};
[...paginationPages].forEach((button) =>
  button.addEventListener('click', handleClick)
);
