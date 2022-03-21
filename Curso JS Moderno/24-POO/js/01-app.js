//Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const juan = new Cliente('juan', 400);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());
//console.log(juan.bienvenida()); da error, porque se llama directamente desde la clase

//Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}`;
    }
}

const juan2 = new Cliente2('juan', 400);
console.log(juan2.mostrarInformacion());