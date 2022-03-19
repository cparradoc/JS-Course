//Cortar la ejecución de un if
for (let i = 0; i <= 10; i++) {
    if(i === 5){
        console.log(`Este es el 5`);
        break;
    }
    console.log(`Número ${i}`);
}

//Rompe el ciclo actual pero no corta el if
for (let i = 0; i <= 10; i++) {
    if(i === 5){
        console.log(`Este es el 5`);
        continue;
    }
    console.log(`Número ${i}`);
}


carrito4 = [{ nombre: "Monitor 32 pulgadas", precio: 400}, 
            { nombre: "Celular", precio: 800}, 
            { nombre: "Teclado", precio: 50, descuento: true},
            { nombre: "Ratón", precio: 20},
            { nombre: "Torre", precio: 3000}
];

for (let i = 0; i < carrito4.length; i++) {
    if(carrito4[i].descuento) {
        console.log(`El artículo ${carrito4[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito4[i].nombre);
}