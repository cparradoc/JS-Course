"use strict"; //exige ciertas reglas en nuestro código

const Producto6 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

//De esta forma no permitimos que se añadan nuevas propiedades, pero si modificar las existentes
Object.seal(Producto6);


Producto6.disponible = false;
//Producto6.imagen = "imagen.jpg";

console.log(Producto6);

console.log(Object.isSealed(Producto6));