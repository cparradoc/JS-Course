const nav = document.querySelector('.navegacion');

//Registrar un evento

nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando en nav');
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de nav');
});

nav.addEventListener('mousedown', () => { //similar a click, pero sin soltar
    nav.style.backgroundColor= 'white';
});

nav.addEventListener('mouseup', () => { //similar a click, pero al soltar solo
    nav.style.backgroundColor= 'red';
});

nav.addEventListener('dblclick', () => { //doble click
    nav.style.backgroundColor= 'blue';
});