const monitor2 = "             Monitor de 20 pulgadas         ";

console.log(monitor2);
console.log(monitor2.length);

//Eliminar espacios extras del inicio
console.log(monitor2.trimStart());
console.log(monitor2.trimStart().length);
//Eliminar espacios extras del final
console.log(monitor2.trimEnd());
console.log(monitor2.trimEnd().length);
//Eliminar espacios extras del inicio y del final
console.log(monitor2.trimStart().trimEnd());
console.log(monitor2.trimStart().trimEnd().length);
