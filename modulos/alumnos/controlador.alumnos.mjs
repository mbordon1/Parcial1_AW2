/*
 Modulo controlador del recurso alumnos
 Capa encargada de gestionar las peticiones HTTP
 Conecta la capa de datos (modelo) con las rutas,
 procesando el request y construyendo la respuesta al cliente
*/

import * as modelo from './modelo.alumnos.mjs'

// Devuelve todos los alumnos registrados 
export function obtenerTodos(req, res) {
    const alumnos = modelo.obtenerTodos()
    res.status(200).json({
        ok: true,
        cantidad: alumnos.length,
        datos: alumnos
    })
}

// Devuelve un alumno por ID 
// Si no existe, responde con 404
export function obtenerUno(req, res) {
    const id = Number(req.params.id)
    const alumno = modelo.obtenerUno(id)

    if (alumno.length > 0) {
        res.status(200).json({ ok: true, datos: alumno })
    } else {
        res.status(404).json({ ok: false, mensaje: 'Alumno no encontrado' })
    }
}

/*
 Cuenta cuantos alumnos hay por grupo.
 No respeta los principios REST de rutas porque utiliza un verbo
 en la URL en lugar de un sustantivo que identifique un recurso
*/
export function contarPorGrupo(req, res) {
    const resumen = modelo.contarPorGrupo()
    res.status(200).json({ ok: true, datos: resumen })
}