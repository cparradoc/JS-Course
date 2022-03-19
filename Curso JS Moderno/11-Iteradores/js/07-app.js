const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

carrito4 = [{ nombre: "Monitor 32 pulgadas", precio: 400}, 
            { nombre: "Celular", precio: 800}, 
            { nombre: "Teclado", precio: 50 },
            { nombre: "Ratón", precio: 20},
            { nombre: "Torre", precio: 3000}
];

for(let pendiente of pendientes) {
    console.log(pendiente);
};

for(let producto of carrito4) {
    console.log(producto);
    console.log(producto.nombre);
    console.log(producto.precio);
};