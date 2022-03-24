//self se refiere a la ventana global

self.onload = () => {
    console.log('Ventana lista');
}

window.nombre = 'Monitor 20 pulgadas';

const producto = {
    precio: 300,
    disponible: true,
    mostrarInfo : function() {
        return `El producto: ${self.nombre} tiene un precio de ${this.precio} $`;
    }
}

console.log(producto.mostrarInfo());