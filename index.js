const showBtn = document.querySelector('.name-form__btn');
const input = document.querySelector('.name-form__input');

const avatar = document.querySelector('.user__avatar');
const username = document.querySelector('.user__name');
const userlocation = document.querySelector('.user__location');

const fetchRequest = (userName) => {
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((response) => {
      username.textContent = response.name;
      userlocation.textContent = '' ? '' : `from ${response.location}`;
      avatar.src = response.avatar_url;
    });
};

const getName = () => {
  const userName = input.value;
  fetchRequest(userName);
};

showBtn.addEventListener('click', () => getName());
