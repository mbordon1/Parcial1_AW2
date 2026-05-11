import router, { Router } from 'express'
import { obtenerAlumnos, obtenerAlumnoPorId } from '../controllers/controladores_alumnos.js'

export const {ruta} = Router()

/// GET - para obtener todos los alumnos
ruta.get("/alumnos", obtenerAlumnos)

/// GET - para obtener un alumno por su ID
ruta.get("/alumnos/:id", obtenerAlumnoPorId)


