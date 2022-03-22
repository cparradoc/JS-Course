

const sym = Symbol();
const sym2 = Symbol();

//No hay dos symbols iguales
if (sym === sym2) {
    console.log("Son iguales");
} else {
    console.log('Son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Perez';
persona.tipoCliente = 'Premium';
persona.saldo = 100; 

console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);

//Las propiedades que utilizan un symbol no son iterables
for(let i in persona) {
    console.log(i);
}


//Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);