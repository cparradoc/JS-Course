//Solo un elemento con un id por documento

const formulario = document.getElementById('formulario');
console.dir(formulario);

//Si no existen elementos sin ese id, devuelve un null
const noExiste = document.getElementById('noExiste');
console.log(noExiste);

//si hubiese dos elementos con un mismo id MALA PRÁCTICA, devolvería solamente el primero, no una colección