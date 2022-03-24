import {editarCliente, obtenerCliente} from './API.js'
import {mostrarAlerta, validar} from './funciones.js'

(function() {

    //Campos formulario
    const nombreInput = document.querySelector('#nombre');
    const telefonoInput = document.querySelector('#telefono');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);
        
        mostrarCliente(cliente);

        //Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function mostrarCliente(cliente) {
        const {nombre, telefono, email, empresa, id} = cliente;
        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        emailInput.value = email;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id:parseInt(idInput.value) 
        }

        if (validar(cliente)){
            //Mostrar mensaje error
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //Reescribe el objeto
        editarCliente(cliente);
    }
})();