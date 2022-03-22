//Generador es una función que devuelve un iterador

function *crearGenerador() {
    //Valores que nuestro generador va a iterar
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador);

function *generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Prodcucto 1', 'Producto 2', 'Producto 3'];

const iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());