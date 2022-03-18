"use strict"; //exige ciertas reglas en nuestro código

const Producto5 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

//De esta forma no permitimos que se modifiquen las propiedades del objeto
Object.freeze(Producto5);


/*Producto5.disponible = false;
Producto5.imagen = "imagen.jpg";*/

console.log(Producto5);

console.log(Object.isFrozen(Producto5));