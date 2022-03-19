const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado.innerText); //si el texto tiene visibility:hidden, no lo muestra
console.log(encabezado.textContent); //encuentra el texto siempre
console.log(encabezado.innerHTML); //se trae el html

/*const nuevoHeading = 'Nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;*/

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';