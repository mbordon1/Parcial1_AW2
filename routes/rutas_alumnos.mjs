/*
 Módulo de rutas de la API REST para el recurso - alumnos
 Define los endpoints REST siguiendo los principios de la arquitectura REST
 -sustantivos en plural, metodos HTTP correctos y rutas con parámetro
 Delega la logica de cada endpoint al modulo controlador
*/

import  { Router } from 'express'
import * as controlador from '../modulos/alumnos/controlador.alumnos.mjs'
import { validarId } from '../middlewares/validarId.mjs'

export const ruta = Router()

/// GET - para obtener todos los alumnos
ruta.get('/', controlador.obtenerTodos)

/// GET - para obtener un alumno por su ID
ruta.get('/:id', validarId, controlador.obtenerUno)



