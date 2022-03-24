//Funciones puras o Pure functions, retornan un dato pero no modifican los valores originales
//Retornan la misma cantidad de datos que los que entran por parámetros

const duplicar = (numero) => numero * 2;

const numero1 = 20;
const resultado = duplicar(numero1);
console.log(resultado);