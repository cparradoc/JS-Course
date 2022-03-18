//Object literal
const producto10 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

//Object Constructor

function Producto12(nombre, precio) {
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true
};

const producto2 = new Producto12("Monitor de 24 pulgadas", 500);
console.log(producto2);