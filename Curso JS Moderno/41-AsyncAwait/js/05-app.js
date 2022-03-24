const url = 'https://pokeapi.co/api/v2/pokemon';

document.addEventListener('DOMContentLoaded', obtenerDatos2);

//Con promises
function obtenerDatos() {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
}

//Con async await
async function obtenerDatos2() {
    try{
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    }catch(error) {
        console.log(error);
    }
}