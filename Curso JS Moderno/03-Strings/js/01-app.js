const producto = "Monitor de 20 pulgadas";
//no utilizar las mismas comillas dentro del string con las que cierras el valor
const producto2 = String('Monitor de 24 "'); 
//como opción se pueden "escapar" las comillas utilizando el símbolo \
const producto3 = new String("Monitor de 27 \"");

console.log(producto);
console.log(producto2);
console.log(producto3);