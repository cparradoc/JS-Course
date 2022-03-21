//Solo almacena strings
localStorage.setItem('nombre', 'Juan');

sessionStorage.setItem('nombre', 'Juan');

const producto = {
    nombre: "Monitor 24 pulgasas",
    precio: 200
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);