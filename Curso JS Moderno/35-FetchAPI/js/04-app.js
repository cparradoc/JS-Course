const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    const url = 'https://picsum.photos/list';

    fetch(url)
        .then( respuesta => {
            return respuesta.json();
        })
        .then( datos => {
            mostrarHTML(datos);
        })
        .catch (error => {
            console.log(error);
        });
        
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach(empleado => {
        const {author, author_url, post_url, filename} = empleado;
        html += `
        <h2>Autor: ${author}</h2>
        <p>Autor url: ${author_url}</p>
        <a href="${post_url}">Ver imagen</a>
        `
    });
    contenido.innerHTML = html;
}