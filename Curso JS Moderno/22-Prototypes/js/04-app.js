function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Silver';
    } else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}



function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); //herencia
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;

//Se instancia siempre después de asignar toda la herencia
const juan = new Persona('Juan', 5000, 24224);
console.log(juan);
console.log(juan.nombreClienteSaldo());
