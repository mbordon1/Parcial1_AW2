/*
 Punto de entrada de la aplicacion
 Inicia el servidor Express, registra los middlewares y define las rutas de la API REST y el endpoint de procedimiento
 */

import express from 'express'
import { logger } from './middlewares/loggerPeticiones.mjs'
import { ruta  } from './routes/rutas_alumnos.mjs'
import * as controlador from './modulos/alumnos/controlador.alumnos.mjs'

const app = express()
const PORT = 3000

// Middleware de Express para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json()) 
// Middleware propio - registra en consola cada peticion recibida
app.use(logger)
// Rutas de la API REST para el recurso alumnos
app.use('/alumnos', ruta)

// Endpoint de procedimiento - no sigue los principios REST de rutas
// porque utiliza un verbo en lugar de un sustantivo como identificador del recurso
app.get('/contarPorGrupo', controlador.contarPorGrupo)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})

