//Mixin pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre} Email: ${this.nombre}`)
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);
    },
    mostrarEmail() {
        console.log(`Mi email es ${this.email}`);
    }
}

//Añadir funciones persona a la clase persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Juan', 'correo@correo.com');
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('Pedro', 'cliente@correo.com');
cliente2.mostrarEmail();

