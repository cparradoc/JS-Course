const formulario = document.querySelector('#formulario');
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    //Validar

    //Consultar API
}