import { nombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombre);
console.log(ahorro);
console.log(mostrarInformacion(nombre, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombre, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());


const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());
