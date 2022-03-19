//Seleccionar elementos por su clase

const header = document.getElementsByClassName('header contenedor');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si una clase no existe, devuelve un array vacío
const noExiste = document.getElementsByClassName('no existe');
console.log(noExiste);