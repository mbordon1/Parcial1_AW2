/*
Registra en consola cada request recibido
Captura el metodo HTTP y timestamp para facilitar el seguimiento de las solicitudes
*/

export const logger = (req, res, next) => {
    const fecha = new Date().toISOString()
    console.log(`[LOG] [${fecha}] - ${req.method} ${req.url}`)
    next()
}