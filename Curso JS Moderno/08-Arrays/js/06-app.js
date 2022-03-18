const carrito2 = [];

const producto4 = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
};

const producto5 = {
    nombre: "Celular",
    precio: 800
};

const producto6 = {
    nombre: "Teclado",
    precio: 50
};

//Forma declarativa con spread operator, la anterior era la imperativa con push
let resultado;
resultado = [...carrito2, producto4];
resultado = [...resultado, producto5];
resultado = [producto6, ...resultado];




console.table(resultado);