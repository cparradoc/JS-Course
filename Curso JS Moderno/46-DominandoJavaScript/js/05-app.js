//Explicit binding


function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy metal', 'Rock'];

//Call
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

//Apply - no tienes que pasarle cada valor de forma individual
persona.apply(informacion, musicaFavorita);

//Bind - igual a call pero devuelve una función
const nueavFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nueavFn();