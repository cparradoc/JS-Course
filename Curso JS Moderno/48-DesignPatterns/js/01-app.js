//Class pattern - Patrón de diseño de creación

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'juan@correo.com');

console.log(persona);