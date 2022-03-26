
const guardarTestimonial = (req, res) => {

    //Validación
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje : 'El nombre está vacío'});
    }
    if(correo.trim() === '') {
        console.push({mensaje : 'El correo está vacío'});
    }
    if(nombre.trim() === '') {
        mensaje.push({mensaje : 'El mensaje está vacío'});
    }
    
}

export { guardarTestimonial};