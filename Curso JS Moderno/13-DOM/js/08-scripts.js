const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes); //los espacios en blanco (saltos de linea) son considerados elementos
console.log(navegacion.children); //lista unicamente los hijos html

console.log(navegacion.children[1]); //podemos acceder a un elemento específico
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

console.log(card.children[1].children[1].textContent);

console.log(card.children[0].src);

console.log(card.parentNode); //misma diferencia que con los hijos
console.log(card.parentElement);

console.log(card.parentElement.parentElement.parentElement);

console.log(card.nextElementSibling);
console.log(card.parentElement.children[1]); //lo mismo que el anterior pero hecho enrevesado

const ultimoCard = document.querySelector('.card:nth-child(4');
console.log(ultimoCard.previousElementSibling); //hermano previo

console.log(navegacion.firstElementChild); //acceso a su primer hijo
console.log(navegacion.lastElementChild); //acceso a su último hijo
