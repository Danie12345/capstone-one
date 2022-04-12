import partners from './partners.js';

const burger = document.querySelector('#hamburger');

burger.addEventListener('click', () => {
  document.querySelector('.nav-options').classList.toggle('active');
});