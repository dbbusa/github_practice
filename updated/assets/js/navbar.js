const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');
toggle.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {

        menu.classList.remove('hidden');
        menu.classList.add('block');
    }
    else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
    }
});