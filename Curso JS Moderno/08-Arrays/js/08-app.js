
//Destructuring con arrays

const numeros3 = [10, 20, 30, 40, 50];

/*const [primero, segundo, tercero] = numeros3;

console.log(primero);
console.log(tercero);*/

/*const [ , , tercero] = numeros3;

console.log(tercero);*/

const [primero, ...tercero] = numeros3;

console.log(tercero);

console.table(carrito4);