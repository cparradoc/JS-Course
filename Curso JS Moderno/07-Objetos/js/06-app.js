const Producto3 = {
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

const { informacion: {fabricacion, fabricacion: {pais}} } = Producto3;
console.log(fabricacion);
console.log(pais);