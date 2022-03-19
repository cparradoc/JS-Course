const autenticado = true;
const puedePagar = false;


console.log(autenticado ? "Está autenticado" : "No está autenticado");

console.log(autenticado && puedePagar ? "Está autenticado" : "No está autenticado");

console.log(autenticado || puedePagar ? "Está autenticado" : "No está autenticado");

console.log(autenticado ? puedePagar ? "Está autenticado" : "Está autenticado, pero no puede pagar" : "No está autenticado");

console.log(autenticado ? "Está autenticado" : null);