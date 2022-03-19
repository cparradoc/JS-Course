const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
];


//crea un array con los productos que cumplan la condición

let moreThan400;

moreThan400 = carrito.filter( producto => producto.precio > 400);

console.log(moreThan400);

let lowerThan600;

lowerThan600 = carrito.filter( producto => producto.precio < 600);
console.log(lowerThan600);

let notAudio;

notAudio = carrito.filter( producto => producto.nombre !== 'Audifonos');
console.log(notAudio);