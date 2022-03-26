const sql = require('mssql');
const config = require('./bdconfig');

const InsertPersonas = async (Nombre, Apellido, Fecha) => {
    try {
     const pool = await sql.connect(config);
     const persona = pool.request()
     .input('Nombre', sql.NVarChar, Nombre)
     .input('Apellido', sql.NVarChar, Apellido)
     .input('Fecha', sql.Date, Fecha)
     .execute('InsertarPersona')
     return ((await persona).recordsets)
    } catch (err) {
        console.log(err);
    }
   }

   const InsertarMuebles = async(descripcion) => {
        try {
            const pool = await sql.connect(config);
            const mueble = pool.request()
            .input('Descripcion', sql.NVarChar, descripcion)
            .execute('InsertarMueble')
            return (await mueble).recordsets
        } catch (err) {
            console.log(err);
        }
   }

   const InsertarHistorialProduccion = async(historial) => {
       try {
           const pool = await sql.connect(config);
           const HistorialProduccion = pool.request()
           .input('IdEmpleado', sql.Int, historial.IdEmpleado)
           .input('IdTarifa', sql.TinyInt, historial.IdTarifa)
           .input('HoraDeInicio', sql.DateTime, historial.HoraDeInicio)
           .input('HoraDeFin', sql.DateTime, historial.HoraDeFin)
           .input('IdPasos', sql.TinyInt, historial.IdPasos)
           .input('IdMueble', sql.Int, historial.IdMueble)
           .execute('InsertarHistorialProduccion')
       } catch (err) {console.log(err);}
   }

//    @IdEmpleado, @IdTarifa, @HoraDeInicio, @HoraDeFin, @IdPasos, @IdMueble
module.exports = {
    InsertPersonas: InsertPersonas,
    InsertarMuebles: InsertarMuebles,
    InsertarHistorialProduccion: InsertarHistorialProduccion
}