const encabezado = document.querySelector('h1');

/* esto es una mala práctica, modifcar css en las stylesheets
encabezado.style.backgroundColor = 'green';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';
*/

const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);



