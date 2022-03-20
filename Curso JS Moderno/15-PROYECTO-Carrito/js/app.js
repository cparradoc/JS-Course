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
};

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

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

    //Agrega elementos al array de articulos
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras en el html
function carritoHTML() {

    //Limpiar el html
    limpiarHTML();

    //Recorre el carrito y genera el html
    articulosCarrito.forEach( (curso) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        //Agrega el html del carrito en el tbody por cada iteración
        contenedorCarrito.appendChild(row);
    });
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





