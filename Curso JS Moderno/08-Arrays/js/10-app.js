//Map para iterar un array

const nuevoArray = carrito4.map( function(p) {
    return `${p.nombre} - Precio ${p.precio}`;
});

const nuevoArray2 = carrito4.forEach( function(p) {
    return `${p.nombre} - Precio ${p.precio}`;
});


//Con map generamos un nuevo array
console.log(nuevoArray);

console.log(nuevoArray2);