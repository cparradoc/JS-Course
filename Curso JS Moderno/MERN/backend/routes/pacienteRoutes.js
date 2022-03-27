import express from "express";
const router = express.Router();
import {obtenerPacientes, agregarPaciente} from '../controllers/pacienteController.js'

router.route('/').post(agregarPaciente).get(obtenerPacientes);

export default router;