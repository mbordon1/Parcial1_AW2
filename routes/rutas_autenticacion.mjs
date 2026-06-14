// Rutas publicas: login y logout
import { Router } from 'express'
import { login, logout } from '../modulos/autenticacion/controlador.aut.mjs'

const router = Router()

// POST - login -- procesa el formulario de login
router.post('/autenticacion', login)

// GET - cerrar-sesion -- elimina la cookie y redirige al login
router.get('/cerrar-sesion', logout)

export default router