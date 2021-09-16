const burger = document.querySelector('.menu__burger');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header-nav');

function toogleMenu() {
    header.classList.toggle('select');
    headerNav.classList.toggle('select');
    burger.classList.toggle('active');
};
burger.addEventListener('click', () => toogleMenu());