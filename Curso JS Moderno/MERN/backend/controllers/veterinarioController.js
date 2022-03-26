

const registrar = (req, res) => {
    res.json({ msg: "Registrando usuario"});
}

const perfil =(req, res) => {
    res.json({msg: 'mostrando perfil'});
}

export {
    registrar,
    perfil
};