const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
];


//saber en qué índice está abril

//forma manual
meses.forEach( (mes, index) => {
    if(mes === 'Abril'){
        console.log(`Encontrado en el ${index}`);
    }
});

//con findIndex
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);

//sino lo encuentra devuelve -1
const indice2 = meses.findIndex( mes => mes === 'Abrilo');
console.log(indice2);

//lo utilizamos en un producto
const indice3 = carrito.findIndex( producto => producto.nombre === 'Celular');
console.log(indice3);

//si hay varios que coinciden con el criterio de búsqueda, devolverá sólo el primero
const indice4 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice4);

