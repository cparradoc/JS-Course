const monitor4 = "Monitor de 20 pulgadas";

//Repetir una cadena de texto x veces
const texto = " en Promoción".repeat(3);

console.log(texto);
console.log(`${monitor4} ${texto} !!!`);

//Si intentamos repetir un texto x veces con decimales, js redondea ese número, siempre a la baja
const texto2 = " en Promoción".repeat(2.4);
console.log(texto2);
const texto3 = " en Promoción".repeat(2.9);
console.log(texto3);

//Dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModerno";
console.log(tweet.split("#"));