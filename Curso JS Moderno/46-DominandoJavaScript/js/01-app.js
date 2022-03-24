//Aquí es el scope global
const cliente = 'Juan';
const login = true;


function mostrarCliente() {
    //Scope de la función
    const persona = 'Pedro';
    const cliente = 'Manuel'; //tiene prioridad si está dentro del scope de la función
    //console.log(cliente);

    if(login) {
        const cliente = 'Admin';
        console.log(cliente);
    }
}

//console.log(persona); da error porque persona solo está definida dentro de la función

mostrarCliente();