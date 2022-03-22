//Un set permite crear una lista de valores sin duplicados
const carrito = new Set();

carrito.add('Camisa');
carrito.add('Camisa'); //no se va a agregar
carrito.add('Disco 1');
carrito.add('Disco 2');

carrito.delete('Disco 2'); //devuelve true si lo puede borrar o false si no puede

console.log(carrito.has('Camisa'));
console.log(carrito.has('Guitarra'));
console.log(carrito.size);

console.log(carrito);

carrito.forEach( producto => {
    console.log(producto);
});

carrito.clear(); //vaciar carrito



console.log(carrito);

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);
