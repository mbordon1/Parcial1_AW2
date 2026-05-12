/*
 Módulo de funciones para el recurso - alumnos
 Contiene la lógica de negocio de cada endpoint:
 procesa la petición, opera sobre los datos y construye la respuesta al cliente
 Separa la lógica de las rutas para mantener un código limpio y modular
*/

import {alumnos} from '../data/alumnos.js'

/// Obtener todos los alumnos
export const obtenerAlumnos = (req, res) => {
    res.status(200).json(
        {
            ok: true,
            cantidad: alumnos.length,
            data: alumnos
        }
    )
}

/// Obtener un alumno por su id
export const obtenerAlumnoPorId = (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)

    if (alumno) {
        res.status(200).json(alumno)
    } else {
        res.status(404).json({ error: "Alumno no encontrado" })
    }
}

/// Contar alumnos por grupo
export const contarAlumnosPorGrupo = (req, res) => {
    const grupo = req.params.grupo
    const alumnosEnGrupo = alumnos.filter(a => a.grupo === grupo)
    res.status(200).json({ grupo: grupo, cantidad: alumnosEnGrupo.length })
}

