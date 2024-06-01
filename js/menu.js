const menuBtns = document.querySelectorAll ('.js-menu-btn');
const menuEl = document.querySelector ('.menu-header');

menuBtns.forEach(btn => {
    btn.addEventListenet('click', event => {
        menuEl.classList.toggle('is-open');
    });
});