//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event listeners
eventListeners();


function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


//Funciones
function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if(tweet == '') {
        mostrarError('Un mensaje no puede ir vacío');
        return;
    }
    
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenedor = document.querySelector('#contenido');
    contenedor.appendChild(mensajeError);
    setTimeout( () => {
        mensajeError.remove();
    }, 3000);
}