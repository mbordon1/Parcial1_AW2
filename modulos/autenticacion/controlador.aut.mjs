// logica de inicio de sesion, generacion de token y cierre de sesion
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { buscarUsuario } from './modelo.aut.mjs'

export async function login(req, res) {
    try {
        const { usuario, pass} = req.body

        // verificar que llegaron los datos
        if (!usuario || !pass) {
            return res.status(400).send('Usuario y contraseña requeridos')
        }

        // busca el usuario en la base de datos
        const usuarioDB = await buscarUsuario(usuario)
        if (!usuarioDB) {
            return res.status(401).send('Credenciales incorrectas')
        }

        // compara la contraseña ingresada con el hash guardado en la bd
        const claveValida = await bcrypt.compare(pass, usuarioDB.password_hash)
        if (!claveValida) {
            return res.status(401).send('Credenciales incorrectas')
        }

        // genera el token JWT con datos del usuario
        const token = jwt.sign(
            { id: usuarioDB.id, username: usuarioDB.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        // guarda el token en una cookie httpOnly para mayor seguridad
        res.cookie('token', token, { httpOnly: true })

        // redirigir a la pagina principal
        res.redirect('/alumnos.html')

    } catch (error) {
        console.error('Error en login:', error)
        res.status(500).send('Error interno del servidor')
    }
}

// elimina la cookie del navegador para cerrar la sesion
export function logout(req, res) {
    res.clearCookie('token')
    res.redirect('/login')
}