const autenticado = true;


if(autenticado) {
    console.log("El usuario está autenticado");
}

const puntaje = 500;

//Ojo con el orden para que el flujo sea el correcto

if (puntaje > 400) {
    console.log("Excelente!!");
} else if (puntaje > 300) {
    console.log("Buen puntaje, felicidades");
}
function revisarPuntaje() {
    if (puntaje > 400) {
        console.log("Excelente!!");
        return; //para aquí el código de la función
    }
    if (puntaje > 300) {
        console.log("Buen puntaje, felicidades");
    }
};

revisarPuntaje();