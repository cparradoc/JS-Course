carrito4 = [{ nombre: "Monitor 32 pulgadas", precio: 400}, 
            { nombre: "Celular", precio: 800}, 
            { nombre: "Teclado", precio: 50 },
            { nombre: "Ratón", precio: 20},
            { nombre: "Torre", precio: 3000}
];

//Iterar usando for
for(let i = 0; i < carrito4.length; i++) {
    console.log(`${carrito4[i].nombre} - Precio ${carrito4[i].precio}`);
}

//Iterar usando forEach
carrito4.forEach( function(p) {
    console.log(`${p.nombre} - Precio ${p.precio}`);
});

//Son exactamente lo mismo e igual de eficientes

