//Singleton

class Persona{
    constructo(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'juan@correo.com');
const persona2 = new Persona('Karen', 'karen@correo.com');

let instancia = null;
class Persona2{
    constructor(nombre, email) {
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

//Solo se crea una instancia del mismo objeto
const persona3 = new Persona2('Juan', 'juan@correo.com');
console.log(persona3);
const persona4 = new Persona2('Karen', 'karen@correo.com');
console.log(persona4);