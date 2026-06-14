// middleware que protege rutas verificando el token JWT en la cookie
import jwt from 'jsonwebtoken'

export function verificarToken(req, res, next) {
  const token = req.cookies?.token

  // si no hay token, bloquear el acceso
  if (!token) {
    // redirigir al login
    if (req.accepts('html')) {
      return res.redirect('/login')
    }
    return res.status(401).json({ error: 'No autorizado. Se requiere autenticación.' })
  }

  try {
    // verifica que el token sea valido y no haya expirado
    const datos = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = datos  // guardar datos del usuario para usarlos en la ruta si se necesita
    next()
  } catch (error) {
    // token invalido o expiroado
    res.clearCookie('token')
    if (req.accepts('html')) {
      return res.redirect('/login')
    }
    return res.status(401).json({ error: 'Token inválido o expirado.' })
  }
}