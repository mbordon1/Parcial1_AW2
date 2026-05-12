/*
 Módulo de rutas de la API REST para el recurso - alumnos
 Define los endpoints REST siguiendo los principios de la arquitectura REST:
 sustantivos en plural, métodos HTTP correctos y rutas con parámetro
 Delega la lógica de cada endpoint al módulo de funciones
*/

import  { Router } from 'express'
import { obtenerAlumnos, obtenerAlumnoPorId } from '../funciones/funciones_alumnos.js'

export const ruta = Router()

/// GET - para obtener todos los alumnos
ruta.get('/', obtenerAlumnos)

/// GET - para obtener un alumno por su ID
ruta.get('/:id', obtenerAlumnoPorId)



