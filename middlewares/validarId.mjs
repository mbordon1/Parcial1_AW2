 /* Valida que el parametro de ruta :id sea un numero entero positivo
    antes de que la peticion llegue al handler correspondiente
    Evita procesamiento innecesario ante datos inválidos
 */
export const validarId = (req, res, next) => {
    const id = Number(req.params.id)

    // Si el ID no es un numero valido o es menor a 1 se rechaza la peticion
    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({
            ok: false,
            mensaje: 'El ID debe ser un número entero positivo'
        })
    }

    // Si el ID es valido cede el control al siguiente middleware o handler
    next()
}
