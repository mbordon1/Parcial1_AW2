import express from 'express'
import { logger } from './middlewares/logger.js'
import { ruta  } from './routes/ruta_alumnos.js'
import { contarAlumnosPorGrupo } from './controllers/controladores_alumnos.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(logger)

app.use('/alumnos', ruta)

app.get('/contarAlumnosPorGrupo', contarAlumnosPorGrupo)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})