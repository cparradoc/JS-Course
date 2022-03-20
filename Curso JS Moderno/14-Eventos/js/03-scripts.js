const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...');
});

busqueda.addEventListener('keyup', () => {
    console.log('soltando...');
});

busqueda.addEventListener('blur', () => { //salir de un elemento
    console.log('blur...');
});

busqueda.addEventListener('copy', () => { //ctrl + c
    console.log('copiado!');
});

busqueda.addEventListener('paste', () => { //ctrl + v
    console.log('pegado!');
});

busqueda.addEventListener('cut', () => { //ctrl + x
    console.log('cortado!');
});

busqueda.addEventListener('input', (e) => { //todo lo anterior menos blur, es decir, los de teclado
    console.log(e);
});

busqueda.addEventListener('input', (e) => { //lo que el usuario escribe
    console.log(e.target.value);
});

