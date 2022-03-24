const url = 'http://127.0.0.1:5500/44-PROYECTO-CRM-CRUD-REST/db.json';

//Cuendo se crea un nuevo cliente
export const nuevoCliente =  async (cliente) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch(error) {
        console.log(error);
    }
}

//Obtener lista de clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch(error) {
        console.log(error);
    }
}

//Eliminar cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch(error) {
        console.log(error);
    }
}

//Obtiene un cliente por su id
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
    } catch(error){
        console.log(error);
    }
}