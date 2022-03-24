const numero1 = 20;
const numero2 = "40";

//Cocerción implícita - pasa el primero a string
console.log(numero1 + numero2);

//Coerción explícita - lo pasa a número
console.log(Number(numero2));

console.log(numero1.toString());

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));

