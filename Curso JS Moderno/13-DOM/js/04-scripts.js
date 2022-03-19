//querySelector solo devuelve el primero
const card = document.querySelector('.card');
console.log(card);

//sino existe devuelve null
const patata = document.querySelector('.patata');
console.log(patata);

//podemos tener selectores expecificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el swgundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//seleccionar por id
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos html por su etiqueta
const navegacion = document.querySelector('nav');
console.log(navegacion);