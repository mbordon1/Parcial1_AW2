 /* Valida que el parámetro de ruta :id sea un número entero positivo
    antes de que la petición llegue al handler correspondiente
    Evita procesamiento innecesario ante datos inválidos
 */
export const validarId = (req, res, next) => {
    const id = Number(req.params.id)

    // Si el ID no es un número válido o es menor a 1, se rechaza la petición
    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            ok: false,
            mensaje: 'El ID debe ser un número entero positivo'
        })
    }

    // Si el ID es válido, cede el control al siguiente middleware o handler
    next()
}
