const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//Existe un valor en un array
meses.forEach( mes => {
    if (mes == 'Enero') {
        console.log('Enero si existe');
    }
});

const resultado = meses.includes('Enero');
console.log(resultado);

//Existe un valor en un objeto

const existe = carrito.some( producto => {
    return producto.nombre === 'Celular';
});

const existe2 = carrito.some( producto => producto.nombre === 'Febrero');

console.log(existe2);

//.some en un array normal

const existe3 = meses.some( mes => mes === 'Febrero');
console.log(existe3);

