//import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio',
        clase: 'home'
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

//Muestra un viaje por su slug
const paginaDetalleViaje = /*async*/ (req, res) => {
    /*const {slug} = req.params;
    try {
        const resultado = await Viaje.findOne({where : {slug}});
        res.render('viaje', {
            pagina: 'Información viaje',
            resultado
        })
    } catch(error){
        console.log(error);s
    }*/
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}