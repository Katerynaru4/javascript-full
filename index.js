const avatar = document.querySelector('.user__avatar');
const name = document.querySelector('.user__name');
const location = document.querySelector('.user__location');
const showBtn = document.querySelector('.name-form__btn');
const nameInput = document.querySelector('.name-form__input');
const repoList = document.querySelector('.repo-list');
const spinner = document.querySelector('.spinner');

avatar.src = 'https://avatars3.githubusercontent.com/u10001';

function getRepos(url) {
  spinner.classList.remove('spinner_hidden');

  fetch(url, {
    method: 'GET',
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }

      throw new Error('Failed to load data');
    })
    .then((data) => {
      spinner.classList.add('spinner_hidden');

      data.map((repo) => {
        const repoNameElem = `<li class="repo-list__item">${repo.name}<li/>`;
        repoList.innerHTML += repoNameElem;
      });
    })
    .catch((err) => alert(err));
}
function getUserInfo() {
  fetch(`https://api.github.com/users/${nameInput.value}`, {
    method: 'GET',
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Failed to load data');
    })
    .then((res) => {
      name.textContent = res.name;
      location.textContent = res.location ? `from ${res.location}` : '';
      avatar.src = res.avatar_url;
      getRepos(res.repos_url);
    })
    .catch((err) => alert(err))
    .finally(() => {
      nameInput.value = '';
    });
}

showBtn.addEventListener('click', getUserInfo);
