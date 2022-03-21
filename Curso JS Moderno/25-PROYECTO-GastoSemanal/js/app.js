//Variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gasto ul');



//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}

//Clases




//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(preguntarPresupuesto)) {
        window.location.reload();
    }
}



