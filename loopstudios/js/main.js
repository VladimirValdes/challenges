

const wrapper = document.querySelector('#wrapper');
const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');


iconMenu.addEventListener('click', (e) => {
    e.preventDefault();
    iconMenu.firstElementChild.classList.toggle('icon-menu__bar--close');
    menu.classList.toggle('menu--show');
    wrapper.classList.toggle('active');
});

