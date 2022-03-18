const monitor = "Monitor de 20 pulgadas";
const precio = "30 USD";

//Concatenación de strings
console.log(monitor.concat(precio));
console.log(monitor.concat("En descuento"));
console.log(monitor + " con un precio de: " + precio);

//Mismo resultado, elegir la que nos resulte más cómoda
console.log("El producto " + monitor + " tiene un precio de $ " + precio);
console.log(`El producto ${monitor} tiene un precio de $ ${precio}`);