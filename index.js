import { fetchUserData, fetchRepositiries } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  try {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositiries(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
};

showBtnElem.addEventListener('click', onSearchUser);
