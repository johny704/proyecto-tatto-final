

const btnmenu = document.querySelector('.fa-bars');
const menu = document.querySelector('nav');

btnmenu.addEventListener('click', (e) => {
    e.preventDefault();
   // menu.style.display = 'block';
   menu.classList.toggle('mostrar');
});


