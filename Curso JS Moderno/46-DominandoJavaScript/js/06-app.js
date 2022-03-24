//New binding

function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

//Window binding

//sino lo encuentra de manera normal lo busca en la ventana global
window.color = 'negro'
function hola() {
    console.log(color);
}

hola();