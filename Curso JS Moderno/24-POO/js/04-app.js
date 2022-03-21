//Class declaration
class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

}

const juan = new Cliente();
juan.setNombre('Juan');
console.log(juan.getNombre());
//console.log(juan.#nombre); no te deja acceder por ser un atributo privado
