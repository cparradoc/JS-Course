//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');

cargarEventListener();
function cargarEventListener() {
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
};

//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log("Agregando al carrito");
    }
}





