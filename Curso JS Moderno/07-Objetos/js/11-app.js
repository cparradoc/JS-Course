//Utilizado this para referirnos a un entorno en el que queremos actuar
const Producto8 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo : function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

const Producto9 = {
    nombre: "Monitor 30 pulgadas",
    precio: 370,
    disponible: true,
    mostrarInfo : function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

Producto8.mostrarInfo();
Producto9.mostrarInfo();

