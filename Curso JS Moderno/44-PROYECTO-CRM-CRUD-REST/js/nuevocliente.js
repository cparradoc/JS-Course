( function () {

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre');
        const email = document.querySelector('#email');
        const telefono = document.querySelector('#telefono');
        const empresa = document.querySelector('#empresa');

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if (validar(cliente)){
            //Mostrar mensaje error

            return;
        }
    }

    function validar(obj) {
        return Object.values(cliente).every(input => input === '');
    }

})();