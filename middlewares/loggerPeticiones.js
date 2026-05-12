/*
 Módulo de middleware propio
 Implementa un logger que intercepta cada petición HTTP recibida antes de que llegue al handler de la ruta correspondiente
 Registra en consola el método HTTP, la URL solicitada y la fecha/hora, lo que facilita el seguimiento del flujo de la aplicación
 */

export const logger = (req, res, next) => {
    const fecha = new Date().toISOString()
    console.log(`[LOG] [${fecha}] - ${req.method} ${req.url}`)
    // Cede el control al siguiente middleware o handler de ruta
    next()
}