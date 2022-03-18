const Producto2 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
};


console.log(Producto2);

console.log(Producto2.informacion);

console.log(Producto2.informacion.medida);

console.log(Producto2.informacion.fabricacion.pais);