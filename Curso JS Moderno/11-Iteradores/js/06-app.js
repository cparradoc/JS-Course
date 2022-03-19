const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente) => {
    console.log(`${pendiente}`)
});

//pasa a ser automáticamente el index el segundo parámetro
pendientes.forEach( (pendiente, index) => {
    console.log(` ${index} ${pendiente}`)
});

carrito4 = [{ nombre: "Monitor 32 pulgadas", precio: 400}, 
            { nombre: "Celular", precio: 800}, 
            { nombre: "Teclado", precio: 50 },
            { nombre: "Ratón", precio: 20},
            { nombre: "Torre", precio: 3000}
];


//no crea un array
carrito4.forEach( (producto) => {
    console.log(producto.nombre);
});

//crea un array
carrito4.map( (producto) => {
    console.log(producto.nombre);
});