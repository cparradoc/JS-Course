
//Eliminar último elemento de una array

console.table(carrito);

carrito.pop();

console.table(carrito);

//Eliminar del inicio del array

carrito.shift();

console.table(carrito);

carrito.push({nombre: "w", precio: 2}, {nombre: "e", precio: 2});

console.table(carrito);

//Desde qué posición se corta y cuántos elementos se cortan, en este caso, el del medio
carrito.splice(1, 1);

console.table(carrito);