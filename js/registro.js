const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('.formreg');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const numTelefono = document.querySelector('#telnumero');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarAPP);

    nombre.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    numTelefono.addEventListener('blur', validarFormulario);
   

}



function iniciarAPP(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('desbutton');
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        const error = document.querySelector('p.error');
        //elimina los errores

        if(error){
            error.remove();
        }
    
    e.target.classList.add('input-correcto');
    e.target.classList.remove('input-error');

} else {
    e.target.classList.add('input-error');
    e.target.classList.remove('input-correcto');

    mostrarMensaje("todos los campos son obligatorios");
}

if(e.target.type === 'email'){
    if(er.test (e.target.value) ){
        e.target.classList.add('input-correcto');
    }else {
        e.target.classList.remove('input-correcto');
        
        e.target.classList.add('input-error');

        mostrarMensaje('este Email no es valido');
    }
}
}




function mostrarMensaje(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.classList.add('input-error', 'error');
    mensajeError.textContent = mensaje;
    const errores = document.querySelector('.error');
    if(errores.length >= 0){
        errores.remove();
    }else{
        formulario.appendChild(mensajeError);

    }
    
}


const anio = document.querySelector('#anio');
const max = new Date().getFullYear(),
    min = max -30;

   

for(let i = max; i > min; i-- ){
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    anio.appendChild(option);
}
