const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
];

//Devuelve true si todos los elementos cumplen la condición
const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);


const resultado2 = carrito.every(producto => producto.precio < 500);
console.log(resultado2);

//con some era que alguno la cumpliese
//si every es un &&, some sería un ||