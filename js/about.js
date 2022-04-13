const burger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('.close-menu');

burger.addEventListener('click', () => {
  document.querySelector('.nav-options').classList.toggle('active');
  burger.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  document.querySelector('.nav-options').classList.toggle('active');
  burger.classList.toggle('active');
});