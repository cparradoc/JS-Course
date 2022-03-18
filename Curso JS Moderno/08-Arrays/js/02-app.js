const numeros2 = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numeros2);
console.table(numeros2);

console.log(numeros2[2]);

//Acceder a una posición inexistente devuelve un undefined
console.log(numeros2[12]);

console.log(numeros2[5]);

//Acceder a una posición de un subarray
console.log(numeros2[5][1]);