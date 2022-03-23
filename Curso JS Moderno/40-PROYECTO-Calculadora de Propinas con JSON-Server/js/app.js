let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    const camposVacios = [mesa, hora].some(campo => campo === '');
    if(camposVacios) {
        const existeAlerta = document.querySelector('.invalid-feedback');
        if(!existeAlerta) {
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = "Todos los campos son obligatorios";
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    }

    //Asignar datos del formulario al cliente
    cliente = {...cliente, mesa, hora};

    //Ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();
    

    //Mostrar las secciones
    mostrarSecciones();

    //Obtener platillos de la API
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const url = 'http://127.0.0.1:5500/40-PROYECTO-Calculadora%20de%20Propinas%20con%20JSON-Server/db.json';

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarPlatillos(resultado))
    .catch(error => console.log(error));
}

function mostrarPlatillos(platillos) {
    const contenidoPlatillos = document.querySelector('#platillos .contenido');
    platillos["platillos"].forEach( platillo => {
        const row = document.createElement('div');
        row.classList.add('row', 'py-3', 'border-top');
        
        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `${platillo.precio} $`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3', 'fw-bold');
        categoria.textContent = categorias[platillo.categoria];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');

        //Función que detecta la cantidad y el platillo que se está agregando
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo, cantidad});
        };

        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);
        contenidoPlatillos.appendChild(row);
    });
}

function agregarPlatillo(producto) {
    let {pedido} = cliente;
    if(producto.cantidad > 0) {

        //Comprueba si el elemento ya existe en el array
        if(pedido.some(articulo => articulo.id === producto.id)) {
            //El articulo ya existe, actualizar cantidad
            const pedidoActualizado = pedido.map(articulo => {
                if(articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            //Se asigna el array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];

        } else {
            pedido = [...pedido, producto];
        }
    } else {
        //Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter( articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];

    }

    //Limpiar código html previo
    limpiarHTML();

    //Mostrar el resumen
    actualizarResumen();
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');
    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    //Información de la mesa
    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    //Información de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    //Añadir elementos
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    //Titulo de la sección
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos consumidos: ';
    heading.classList.add('my-4', 'text-center');

    //Iterar sobre el array de pedidos
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    console.log(pedido);
    pedido.forEach( articulo => {
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item');

        const nombreEL = document.createElement('h4');
        nombreEL.classList.add('my-4');
        nombreEL.textContent = nombre;

        const cantidadEL = document.createElement('p');
        cantidadEL.classList.add('fw-bold');
        cantidadEL.textContent = 'Cantidad: ';
        
        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        cantidadEL.appendChild(cantidadValor);

        const precioEL = document.createElement('p');
        precioEL.classList.add('fw-bold');
        precioEL.textContent = 'Precio: ';
        
        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `${precio}$`;

        precioEL.appendChild(precioValor);

        //Agregar elementos al li
        lista.appendChild(nombreEL);
        lista.appendChild(cantidadEL);
        lista.appendChild(precioEL);

        //Agregar lista al grupo principal
        grupo.appendChild(lista);
    });

    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(heading);
    resumen.appendChild(grupo);
    
    contenido.appendChild(resumen);

}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');
    while(contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}
