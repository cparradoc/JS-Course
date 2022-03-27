import express from "express";
const router = express.Router();
import {obtenerPacientes, agregarPaciente} from '../controllers/pacienteController.js'
import checkAuth from '../middleware/authMiddleware.js'

router.route('/').post(checkAuth, agregarPaciente).get(obtenerPacientes);

export default router;