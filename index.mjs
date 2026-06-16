import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { verificarToken } from './middlewares/verificarToken.mjs'
import rutasAutenticacion from './routes/rutas_autenticacion.mjs'
import { ruta as rutasAlumnos } from './routes/rutas_alumnos.mjs'
import { contarPorGrupo } from './modulos/alumnos/controlador.alumnos.mjs'

// carga las variables de entorno desde el archivo .env
dotenv.config()

const PUERTO = process.env.PUERTO || 3000
const app = express()

// middlewares globales 
app.use(express.json())
// sirve para leer los datos enviados desde formularios HTML
app.use(express.urlencoded({ extended: true }))
// habilita la lectura de cookies en req.cookies
app.use(cookieParser())

// rutas y recursos publicos (sin autenticacion) 
// las rutas de autenticacion se registran antes del verificarToken
// para que el login sea accesible sin credenciales previas
app.use('/', rutasAutenticacion)
app.use(express.static('public'))            // CSS funcionando en todas las rutas
app.use('/login', express.static('fronts/login'))

// capa de seguridad 
// a partir de este punto todas las rutas requieren token valido
app.use(verificarToken)
// paginas protegidas 
app.use(express.static('fronts/alumnos'))
// API protegida 
app.use('/alumnos', rutasAlumnos)
app.get('/contarPorGrupo', contarPorGrupo)

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`)
})
