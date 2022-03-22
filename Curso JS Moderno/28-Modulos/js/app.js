import nuevaFuncion, { nombre as n, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(n);
console.log(ahorro);
console.log(mostrarInformacion(n, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(n, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());


const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

nuevaFuncion();
