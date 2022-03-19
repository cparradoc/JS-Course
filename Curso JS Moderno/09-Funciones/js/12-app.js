carrito4 = [{ nombre: "Monitor 32 pulgadas", precio: 400}, 
            { nombre: "Celular", precio: 800}, 
            { nombre: "Teclado", precio: 50 },
            { nombre: "Ratón", precio: 20},
            { nombre: "Torre", precio: 3000}
];

//Map para iterar un array

const nuevoArray = carrito4.map( p => `${p.nombre} - Precio ${p.precio}`);

const nuevoArray2 = carrito4.forEach( p => `${p.nombre} - Precio ${p.precio}`);


//Con map generamos un nuevo array
console.log(nuevoArray);

console.log(nuevoArray2);