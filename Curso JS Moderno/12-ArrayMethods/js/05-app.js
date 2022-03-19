const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
];

//con foreach
let resultado;
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index];
    }
}); 
console.log(resultado);

//con find, solo devuelve el primer elemento que cumple la condición
resultado = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado);