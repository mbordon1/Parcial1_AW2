// consulta a la bd para obtener un usuario por su username
import pool from '../../conexion.bd.mjs'

export async function buscarUsuario(username) {
    // se utiliza $1 - una consulta parametrizada para evitar la inyección SQL
    const resultado = await pool.query(
        'SELECT * FROM usuarios WHERE username = $1',
        [username]
    )
    // rows[0] retorna el primer resultado o undefined si no existe el usuario
    return resultado.rows[0]
}


