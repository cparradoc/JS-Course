//Se usan para acceder a un atributo o a una función de un scope desde el exterior 

const obtenerCliente = () => {
    const nombre = "Juan";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();