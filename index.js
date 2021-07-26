const taskStatusCheckbox = document.querySelector('.task-status');
taskStatusCheckbox.addEventListener('change', () => {
  console.log(taskStatusCheckbox.checked);
});
