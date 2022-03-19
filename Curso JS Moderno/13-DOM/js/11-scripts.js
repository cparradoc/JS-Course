const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter () { //lo hacemos con la clase activo porque cambia en bottom
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo'); //es el boton mismo porque es quien llama a la función
        this.textContent = 'Idioma y Moneda';
    } else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
};