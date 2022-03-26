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

    // Historial Produccion

    
    
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

    const EliminarHistorialProduccion = async(id) => {
        try {
            const pool = await sql.connect(config);
            const HistorialProduccion = pool.request()
            .input('IdEmpleado', sql.Int, id)
            .execute('EliminarRegistro')
        } catch (err) {console.log(err);}
    }
    
    //    SPECIAL SP'S
    
    const ObtenerHistorialProduccion = async(v) => {
        // console.log('horas: ', v);
        try {
            const pool = await sql.connect(config);
            const historialProd = await pool.request()
            .input('FechaInicio', sql.DateTime, v.HoraDeInicio.replace('T', ' ').replace('Z', ''))
            .input('FechaFin', sql.DateTime, v.HoraDeFin.replace('T', ' ').replace('Z', ''))
            .execute('TransaccionesFecha')
            return (await historialProd).recordsets
        } catch (err) {console.log(err);}
    }

    const ObtenerHistorialPasosPeriodo = async(v) => {
        try {
            const pool = await sql.connect(config);
            const historialProd = await pool.request()
            .input('FechaInicio', sql.DateTime, v.HoraDeInicio.replace('T', ' ').replace('Z', ''))
            .input('FechaFin', sql.DateTime, v.HoraDeFin.replace('T', ' ').replace('Z', ''))
            .input('IdPaso', sql.TinyInt, v.IdPaso)
            .execute('HistorialPasosPeriodo')
            return (await historialProd).recordsets
        } catch (err) {console.log(err);}
    }

    const ObtenerHistorialEmpleadoPeriodo = async(v) => {
        try {
            const pool = await sql.connect(config);
            const historialProd = await pool.request()
            .input('FechaInicio', sql.DateTime, v.HoraDeInicio.replace('T', ' ').replace('Z', ''))
            .input('FechaFin', sql.DateTime, v.HoraDeFin.replace('T', ' ').replace('Z', ''))
            .input('IdEmpleado', sql.Int, v.IdEmpleado)
            .execute('HistorialEmpleadoPeriodo')
            return (await historialProd).recordsets
        } catch (err) {console.log(err);}
    }

    const ObtenerHistorialDepartamento = async(v) => {
        try {
            const pool = await sql.connect(config);
            const historialProd = await pool.request()
            .input('FechaInicio', sql.DateTime, v.HoraDeInicio.replace('T', ' ').replace('Z', ''))
            .input('FechaFin', sql.DateTime, v.HoraDeFin.replace('T', ' ').replace('Z', ''))
            .input('IdDepartamento', sql.Int, 1)
            .execute('HistorialDepartamento')
            return (await historialProd).recordsets
        } catch (err) {console.log(err);}
    }

    const ObtenerResumenActividad = async(v) => {
        try {
            const pool = await sql.connect(config);
            const historialProd = await pool.request()
            .input('FechaInicio', sql.DateTime, v.HoraDeInicio.replace('T', ' ').replace('Z', ''))
            .input('FechaFin', sql.DateTime, v.HoraDeFin.replace('T', ' ').replace('Z', ''))
            .execute('ResumenActividad')
            return (await historialProd).recordsets
        } catch (err) {console.log(err);}
    }

    const ResumenUnidadesDepa = async(v) => {
        try {
            const pool = await sql.connect(config);
            const historialProd = await pool.request()
            .input('FechaInicio', sql.DateTime, v.HoraDeInicio.replace('T', ' ').replace('Z', ''))
            .input('FechaFin', sql.DateTime, v.HoraDeFin.replace('T', ' ').replace('Z', ''))
            .execute('ResumenUnidadesDepa')
            return (await historialProd).recordsets
        } catch (err) {console.log(err);}
    }

    //    @IdEmpleado, @IdTarifa, @HoraDeInicio, @HoraDeFin, @IdPasos, @IdMueble
module.exports = {
    InsertPersonas: InsertPersonas,
    InsertarMuebles: InsertarMuebles,
    InsertarHistorialProduccion: InsertarHistorialProduccion,
    EliminarHistorialProduccion: EliminarHistorialProduccion,
    ObtenerHistorialProduccion: ObtenerHistorialProduccion,
    ObtenerHistorialPasosPeriodo: ObtenerHistorialPasosPeriodo,
    ObtenerHistorialEmpleadoPeriodo: ObtenerHistorialEmpleadoPeriodo,
    ObtenerHistorialDepartamento: ObtenerHistorialDepartamento,
    ObtenerResumenActividad: ObtenerResumenActividad,
    ResumenUnidadesDepa: ResumenUnidadesDepa
}