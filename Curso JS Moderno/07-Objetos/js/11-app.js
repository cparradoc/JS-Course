//Utilizado this para referirnos a un entorno en el que queremos actuar
const producto8 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo : function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

const producto9 = {
    nombre: "Monitor 30 pulgadas",
    precio: 370,
    disponible: true,
    mostrarInfo : function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

producto8.mostrarInfo();
producto9.mostrarInfo();

