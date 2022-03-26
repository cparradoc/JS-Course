import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
   // const {nombre, email, password} = req.body;
   try {
       //Guardar un nuevo veterinario
       const veterinario = new Veterinario(req.body);
       const veterinarioGuardado = await veterinario.save();

   } catch (error) {
       console.log(error);
   }

    res.json(veterinarioGuardado);
}

const perfil =(req, res) => {
    res.json({msg: 'mostrando perfil'});
}

export {
    registrar,
    perfil
};