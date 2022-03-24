//Implicit binding
//Le decimos en qué parte va a encontrar los valores del objeto

const usuario = {
    nombre: 'juan',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y edad es ${this.edad}`) //necesitamos this
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y edad es ${this.edad}`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();