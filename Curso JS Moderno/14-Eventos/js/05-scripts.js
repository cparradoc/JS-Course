window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    //console.log(window.scrollY +'px');

    const premium = document.querySelector('.premium');
    //a qué distancia se encuentra el elemento del scroll
    const ubicacicion = premium.getBoundingClientRect(); 

    if(ubicacicion.top < 100) { //solo lo estamos comprobando por arriba
        console.log("Estás viendo el elemento");
    } else {
        console.log("Aun no");
    }

    //console.log(ubicacicion);
});