const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
];

//cuánto tiene que pagar un usuario

//con un foreach

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

//con un reduce

//valor anterior y valor actual como parámetros, el total se inicia a 0 con la ", 0" al final

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);