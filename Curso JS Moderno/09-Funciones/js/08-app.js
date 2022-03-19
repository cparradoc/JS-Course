function sumar(a ,b) {
    return a + b;
}

const resultado = sumar(3, 5);

console.log(resultado);

let total = 0;

function agregarCarrito(precio) { 
    return total += precio;
};

function calcularImpuesto(total) {
    return total * 1.15;
};

agregarCarrito(300);
agregarCarrito(110);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(totalPagar);