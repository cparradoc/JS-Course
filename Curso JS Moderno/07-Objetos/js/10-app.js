const Producto7 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

const Medida = {
    peso: '10kg',
    medida: '1m'
};

console.log(Producto7);
console.log(Medida);

const resultado = Object.assign(Producto7, Medida);

console.log(resultado);

//Spread Operator o Rest Operator
const resultado2 = {...Producto7, ...Medida}
console.log(resultado2);