const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log("Si puede pagar");
} else if (!usuario) {
    console.log("Ingrese en su cuenta");
} else if (!puedePagar) {
    console.log("No puede pagar por fondos");
} else{
    console.log("No, no puedes comprar");
}