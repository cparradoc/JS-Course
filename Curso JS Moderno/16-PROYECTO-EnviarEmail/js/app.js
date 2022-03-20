//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//Funciones
eventListeners();
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario); //El evento sale cuando te sacas del campo de texto
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
}

function validarFormulario(e) {
    if(e.target.value.length > 0) {
        console.log("escribe anda");
    }else{
        e.target.classList.add('border', 'border-red-500');

        mostrarError();
    }
}

function mostrarError() {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100',
     'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

     const errores = document.querySelectorAll('.error');
     if(errores.length === 0){
        formulario.appendChild(mensajeError);
     }

}