"use strict";

var btnmenu = document.querySelector('.fa-bars');
var menu = document.querySelector('nav');
btnmenu.addEventListener('click', function (e) {
  e.preventDefault(); // menu.style.display = 'block';

  menu.classList.toggle('mostrar');
});