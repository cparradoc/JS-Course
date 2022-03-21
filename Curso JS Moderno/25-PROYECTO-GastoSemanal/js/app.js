//Variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gasto ul');



//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divAlerta.classList.add('alert-danger');
        } else {
            divAlerta.classList.add('alert-success');
        }

        divAlerta.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divAlerta, formulario);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }
}

//Instanciar
const ui = new UI();
let presupuesto;

//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

}

function agregarGasto(e) {
    e.preventDefault();

    //Leer campos
    const gasto = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    //Validar
    if (gasto === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida');
        return;
    }
}



