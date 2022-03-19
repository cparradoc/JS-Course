const enlace = document.createElement('a');
enlace.textContent = 'Nuevo enlace';
enlace.href = './nuevo-enlace';

enlace.onclick = miFuncion;
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //lo coloca al final

function miFuncion() {
    alert("HEY");
};

//crear card

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'texto alternativo';

//crear el card
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

//Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);