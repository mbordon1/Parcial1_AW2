/*
 Modulo modelo del recurso alumnos
 Capa encargada del acceso a los datos
 Lee los datos desde un archivo JSON utilizando el modulo fs de NodeJS
 y contiene las funciones que operan sobre esos datos
*/

import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/*
 Se lee el archivo JSON de forma sincrona al iniciar el modulo
 readFileSync bloquea la ejecucion hasta completar la lectura
*/
const ruta = join('data', 'alumnos.json')
const alumnos = JSON.parse(readFileSync(ruta, 'utf-8'))

// Retorna todos los alumnos
export function obtenerTodos() {
    return alumnos
}

// Retorna un alumno filtrado por ID
export function obtenerUno(id) {
    return alumnos.filter(alumno => alumno.id === id)
}

// Retorna un objeto con la cantidad de alumnos por grupo
export function contarPorGrupo() {
    return alumnos.reduce((acumulador, alumno) => {
        acumulador[alumno.grupo] = (acumulador[alumno.grupo] || 0) + 1
        return acumulador
    }, {})
}