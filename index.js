const checkbox = document.querySelector('.task-status');
checkbox.addEventListener('change', (event) => {
  console.log(event.target.checked);
});
