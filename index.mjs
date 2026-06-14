import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { logger } from './middlewares/loggerPeticiones.mjs'
import { verificarToken } from './middlewares/verificarToken.mjs'
import rutasAutenticacion from './routes/rutas_autenticacion.mjs'
import { ruta as rutasAlumnos } from './routes/rutas_alumnos.mjs'
import { contarPorGrupo } from './modulos/alumnos/controlador.alumnos.mjs'

dotenv.config()

const PUERTO = process.env.PUERTO || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(logger)


app.use('/', rutasAutenticacion)
// form login
app.use('/login', express.static('fronts/login'))

app.use(verificarToken)

app.use(express.static('fronts/alumnos'))

app.use('/alumnos', rutasAlumnos)
app.get('/contarPorGrupo', contarPorGrupo)

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`)
})
