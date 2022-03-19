for (let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

for (let i = 0; i < 20; i++) {
    if(i % 2 === 0) {
        console.log(`Número ${i} es par`);
    } else {
        console.log(`Número ${i} es impar`);
    }
}

carrito4 = [{ nombre: "Monitor 32 pulgadas", precio: 400}, 
            { nombre: "Celular", precio: 800}, 
            { nombre: "Teclado", precio: 50 },
            { nombre: "Ratón", precio: 20},
            { nombre: "Torre", precio: 3000}
];

for (let i = 0; i < carrito4.length; i++) {
    console.log(`Producto ${carrito4[i].nombre}`);
}