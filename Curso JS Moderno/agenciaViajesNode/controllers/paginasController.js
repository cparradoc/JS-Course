//import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req, res) => {
    res.render('inicio', {
    pagina: 'Inicio'
    });
};

const paginaNosotros = (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = /*async*/(req, res) => {
    //Consultar db
    /*const viajes = Viaje.findAll();

    */
    res.render('viajes', {
        pagina: 'Próximos Viajes'/*,
         viajes*/
    });
};

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}