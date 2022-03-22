//Mantiene lo de dentro local a este archivo
/*(function() {
    console.log('Desde un IIFE');
    const nombreCliente = 'Juan';
})();*/

export const nombre = 'Juan';
export const ahorro = 200;


export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log("Tiene saldo");
    } else {
        console.log("No tiene saldo");
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}