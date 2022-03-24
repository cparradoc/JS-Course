
console.log('primero');

setTimeout(() => {
    console.log('segundo');
}, 0);

console.log('tercero');

setTimeout(() => {
    console.log('cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Desconocido...')
}).then(console.log)

console.log('ultimo');

//Orden de ejecución: primero, tercero, ultimo, desconocido, segundo, cuarto

function hola() {
    console.log('hola');
}

hola();

//Orden de ejecución: primero, tercero, ultimo, hola, desconocido, segundo, cuarto
