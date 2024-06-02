const menuBtns = document.querySelectorAll ('.js-menu-btn');
const menuEl = document.querySelector ('.mobile_menu');

menuBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        menuEl.classList.toggle('is-open');
    });
});


const backdrop = document.getElementById('backdrop')
const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
});
