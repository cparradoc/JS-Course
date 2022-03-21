//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event listeners
eventListeners();


function eventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHtml();
    }); 

}


//Funciones
function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if(tweet == '') {
        mostrarError('Un mensaje no puede ir vacío');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }

    tweets = [...tweets, tweetObj];

    crearHtml();

    formulario.reset();
    
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

function crearHtml() {
    limpiarHtml();
    if(tweets.length > 0) {
        tweets.forEach ( tweet => {
            const li = document.createElement('li');
            li.innerText = tweet.texto;
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

function limpiarHtml() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}