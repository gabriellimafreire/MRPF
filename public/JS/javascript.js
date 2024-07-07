const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.md:block');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
