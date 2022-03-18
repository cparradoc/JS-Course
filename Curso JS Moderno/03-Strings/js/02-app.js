const prod = "Monitor 20";

console.log(prod);

//Comprobar la longitud del string
console.log(prod.length);

//Comprobar en qué posición se encuentra una cadena de texto, sino se encuentra devuelve -1
console.log(prod.indexOf('Monitor'));

//Comprobar que incluye una cadena de texto, devuelve boolean
console.log(prod.includes('Monitor'));
//Sino coinciden mayúsculas y minúsculas, devolverá false
console.log(prod.includes('monitor'));