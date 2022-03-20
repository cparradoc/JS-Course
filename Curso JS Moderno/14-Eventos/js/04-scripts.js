const formulario = document.querySelector('#formulario');


//el addevent listener le pasa el evento por defecto sin necesidad de parentesis
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) { 
    e.preventDefault(); //prevenimos su acción por defecto

    console.log(e);
}
