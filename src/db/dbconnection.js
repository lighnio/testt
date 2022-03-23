const sql = require('mssql');
const config = require('./bdconfig');

const InsertPersonas = async (Persona) => {
    try {
     const pool = await sql.connect(config);
     const persona = pool.request().query('SELECT * FROM Personas')
     return ((await persona).recordsets)
    } catch (err) {
        console.log(err);
    }
   }

module.exports = {
    InsertPersonas: InsertPersonas,
}