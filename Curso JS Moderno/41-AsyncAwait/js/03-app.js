function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('Listado de clientes correcto');
            } else{
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

const ejecutar = async () => {
    try {
        console.log(1 + 1);
        //await detiene la ejecución del código hasta que se resuelve el promise
        const respuesta = await descargarClientes(); 

        console.log(2 + 2);
        console.log(respuesta);
    } catch(error) {
        console.log(error);
    }
}
ejecutar();