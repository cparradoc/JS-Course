
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];


//concat

const meses4 = meses.concat(meses2);
console.log(meses4);

//se pueden concatenar más de dos arrays
const año = meses.concat(meses2, meses3);
console.log(año);

//spread operator

const resultado = [...meses, ...meses2];
console.log(resultado);

const resultado2 = [...meses, ...meses2, 'Otro mes'];
console.log(resultado2);

//Si usas el spread operator con una cadena en vez de un array, te trocea la cadena por caracteres
const resultado3 = [...meses, ...meses2, ...'Otro mes'];
console.log(resultado3);