const menuBtns = document.querySelectorAll ('.js-menu-btn');
const menuEl = document.querySelector ('.mobile_menu');

menuBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        menuEl.classList.toggle('is-open');
    });
});


const backdrop = document.getElementById('backdrop');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
    backdrop.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
});
