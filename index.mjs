/*
 Punto de entrada de la aplicacion
 Inicia el servidor Express, registra los middlewares y define las rutas de la API REST y el endpoint de procedimiento
 */

import express from 'express'
import { logger } from './middlewares/loggerPeticiones.js'
import { ruta  } from './routes/rutas_alumnos.js'
import { contarAlumnosPorGrupo } from './funciones/funciones_alumnos.js'
import { validarId } from './middlewares/validarId.js'

const app = express()
const PORT = 3000

// Middleware de Express para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json()) 
// Middleware propio - registra en consola cada peticion recibida
app.use(logger)
// El middleware validarId se ejecuta antes del handler
app.use('/alumnos', validarId, ruta)

app.get('/contarAlumnosPorGrupo', contarAlumnosPorGrupo)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})