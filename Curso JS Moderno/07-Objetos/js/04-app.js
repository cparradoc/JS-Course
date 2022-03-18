
console.log(Producto.nombre);

const nombre1 = Producto.nombre;
console.log(nombre1);

//Destructuring
const { nombre } = Producto;

//Se pueden sacar varias a la vez const { nombre, precio } = Producto;
console.log(nombre);

//Si se intenta extraer una propiedad que no existe, nos devolverá un undefined
const { apellido } = Producto;
console.log(apellido);

