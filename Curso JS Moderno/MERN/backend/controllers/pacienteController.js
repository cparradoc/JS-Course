import Paciente from "../models/Paciente.js";

const agregarPaciente = (rq, res) => {
    const paciente = new Paciente(req.body);

    try {

    } catch (error) {
        console.log(error);
    }
}

const obtenerPacientes = (rq, res) => {
    
}

export {
    agregarPaciente,
    obtenerPacientes
};