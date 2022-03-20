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
    mostrarAutos(autos);

    llenarSelect();
});

//Event listener para los resultados
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//Funciones
function mostrarAutos(autos) {

    limpiarHtml();

    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color} = auto
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Precio: ${precio} $ - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    });
}

function limpiarHtml() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo);

    mostrarAutos(resultado);
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

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= parseInt(datosBusqueda.minimo);
    }
    return auto;
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }
    return auto;
}