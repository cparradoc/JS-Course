const meses4 = ['Enero', 'Febrero', 'Marzo'];

//Lo añade en la primera posición libre
meses4.push('Abril');
meses4.push('Mayo');

console.table(meses4);

const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
};

const producto2 = {
    nombre: "Celular",
    precio: 800
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 50
};


//Añade en la primera posición
carrito.unshift(producto3);

console.table(carrito);