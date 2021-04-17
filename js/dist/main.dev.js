"use strict";

var btnmenu = document.querySelector('.fa-bars');
var menu = document.querySelector('nav');
btnmenu.addEventListener('click', function (e) {
  e.preventDefault(); // menu.style.display = 'block';

  menu.classList.toggle('mostrar');
});
var btnEnviar = document.querySelector('#enviar');
var formulario = document.querySelector('.formreg');
var nombre = document.querySelector('#nombre');
var email = document.querySelector('#email');
var numTelefono = document.querySelector('#telnumero');
var er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', iniciarAPP);
  nombre.addEventListener('blur', validarFormulario);
  email.addEventListener('blur', validarFormulario);
  numTelefono.addEventListener('blur', validarFormulario);
  btnEnviar.addEventListener('click', envairRegistro);
}

function iniciarAPP() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add('desbutton');
}

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    var error = document.querySelector('p.error'); //elimina los errores

    if (error) {
      error.remove();
    }

    e.target.classList.add('input-correcto');
    e.target.classList.remove('input-error');
  } else {
    e.target.classList.add('input-error');
    e.target.classList.remove('input-correcto');
    mostrarMensaje("todos los campos son obligatorios");
  }

  if (e.target.type === 'email') {
    if (er.test(e.target.value)) {
      e.target.classList.add('input-correcto');
    } else {
      e.target.classList.remove('input-correcto');
      e.target.classList.add('input-error');
      mostrarMensaje('este Email no es valido');
    }
  }

  if (er.test(email.value) && nombre.value !== '' && numTelefono !== '') {
    btnEnviar.disabled = false;
  }
  /*
  const diferencia = new Date(). getFullYear() - anio.value;
  if(diferencia <= 18){
      mostrarMensaje('debes ser mayor de edad para contactarnos');
  } else {
      mostrarMensaje('estas a un paso de contactarnos');
  }
  */

}

function mostrarMensaje(mensaje) {
  var mensajeError = document.createElement('p');
  mensajeError.classList.add('input-error', 'error');
  mensajeError.textContent = mensaje;
  var errores = document.querySelector('.error'); //formulario.appendChild(mensajeError);

  if (errores != null) {
    errores.remove();
  } else {
    formulario.appendChild(mensajeError);
  }
}

function envairRegistro(e) {
  e.preventDefault(); //mostrar spiner

  var spiner = document.querySelector('.spiner');
  spiner.style.display = 'flex'; //despues de 3 segundos ocultar spiner

  setTimeout(function () {
    spiner.style.display = 'none';
    var parrafo = document.createElement('p');
    parrafo.textContent = 'el usuario a sido registrado con exito';
    parrafo.classList.add('input-correcto', 'envio');
    formulario.insertBefore(parrafo, spiner);
    setTimeout(function () {
      parrafo.remove();
      formulario.reset();
      iniciarAPP();
    }, 3000);
  }, 3000);
}
/*
const anio = document.querySelector('#anio');
const max = new Date().getFullYear(),
    min = max -30;

   

for(let i = max; i > min; i-- ){
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    anio.appendChild(option);
}
*/