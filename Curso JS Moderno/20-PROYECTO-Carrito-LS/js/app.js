//Variables


const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener() {
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Muestra los cursos del local storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    //Vaciar el carrito
    btnVaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];
        carritoHTML();
    });
};

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
};

function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Igualamos los artículos a todos los que hay excepto al que pulsamos eliminar
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        carritoHTML();
    }
};

//Lee el contenido del html al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {

    //Crear ibjeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    };

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);

    //Agrega elementos al array de articulos
    if(existe) {
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    

    carritoHTML();
}

//Muestra el carrito de compras en el html
function carritoHTML() {

    //Limpiar el html
    limpiarHTML();

    //Recorre el carrito y genera el html
    articulosCarrito.forEach( (curso) => {
        const { imagen, titulo, precio, cantidad, id} = curso; //destructuring
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src=${imagen} width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id=${id}> X </a>
            </td>

        `;

        //Agrega el html del carrito en el tbody por cada iteración
        contenedorCarrito.appendChild(row);
    });

    //Agregar carrito al storage
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}



//Elimina los cursos del tbody

function limpiarHTML() {
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    //Forma rápida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}





