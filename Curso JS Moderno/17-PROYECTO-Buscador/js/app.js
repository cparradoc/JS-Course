//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    llenarSelect();
});

//Event listener para los resultados
marca.addEventListener('change', () => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', () => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();
});

minimo.addEventListener('change', () => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', () => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', () => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', () => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', () => {
    datosBusqueda.color = e.target.value;
});

//Funciones
function mostrarAutos() {
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color} = auto
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Precio: ${precio} $ - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    });
}

//Genera los años del select
function llenarSelect() {  
    for(let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        opcion.value= i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }

}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}