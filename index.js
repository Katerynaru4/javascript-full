export const squaredNumbers = () => {
  const numbers = document.querySelectorAll('.number');
  Array.from(numbers).map((el) => {
    el.dataset.squaredNumber = el.dataset.number ** 2;
    return el;
  });
};
