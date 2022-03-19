const dinero = 200;
const totalAPagar = 300;
const tarjeta = true;

if( dinero >= totalAPagar) {
    console.log("Podemos pagar en efectivo");
} else if (tarjeta) {
    console.log("Podemos pagar con tarjeta");
} else {
    console.log("No podemos pagar");
}

