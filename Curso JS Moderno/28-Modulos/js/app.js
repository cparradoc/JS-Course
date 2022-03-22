import { nombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";

console.log(nombre);
console.log(ahorro);
console.log(mostrarInformacion(nombre, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombre, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());
