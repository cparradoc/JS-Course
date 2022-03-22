const formulario = document.querySelector('#formulario');
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    //Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if( ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
    }

    //Consultar API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta) {
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
        'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
}

function consultarAPI(ciudad, pais) {
    const appId = '883a1603d8690ee1ebd03c7d22781fc1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML();
            if(datos.cod === '404') {
                mostrarError('Ciudad no encontrada');
                return;
            }
            mostrarClima(datos);
        });

}

function mostrarClima(datos) {
    const { main: {temp, temp_max, temp_min}} = datos;

    const centigrados = parseFloat(temp);

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold','text-6xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(actual);

    resultado.appendChild(resultadoDiv);
}

function kelvinACentigrados(grados) {
    return parseFloat(grados - 273.15);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}