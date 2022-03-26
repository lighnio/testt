const { firstName, lastName, date } = require('minifaker');
require('minifaker/locales/es')

const Db = require('./db/dbconnection');

function Histo(hist){
    // this.IdHistorial = hist.IdHistorial
    this.IdEmpleado = hist.IdEmpleado
    this.IdTarifa = hist.IdTarifa
    this.HoraDeInicio = hist.HoraDeInicio
    this.HoraDeFin = hist.HoraDeFin
    this.IdPasos = hist.IdPasos
    this.IdMueble = hist.IdMueble
}

let cont = []

// ***************************************************************************
// ************                GENERATING DATA                      **********
// ***************************************************************************

function getRandomDate(fromDate, toDate, fromTime, toTime) {
    fromDate = fromDate.getTime();
    toDate = toDate.getTime();
    fromTime.setFullYear(2000,0,1); //reset the date
    toTime.setFullYear(2000,0,1); //because we only want a time here
    fromTime = fromTime.getTime();
    toTime = toTime.getTime();
    let randomDate = new Date(fromDate + Math.random() * (toDate - fromDate));
    randomTime = new Date(fromTime + Math.random() * (toTime - fromTime));
    randomDate.setHours(randomTime.getHours());
    randomDate.setMinutes(randomTime.getMinutes());
    randomDate.setSeconds(randomTime.getSeconds());
    return randomDate
}

function CrearHistorialProduccion(iteraciones){
    
    let year = 2000, month = 1, day = 1, hour = 7, minute = 5
    for (let i = 1, empl = 76, tarPas = 1, muebl = 1; i <= iteraciones; '') {   
        i % 100000 == 0 ? console.log(i) : ''
        let hourString = `${year}-${`${month}`.length == 1? `0${month}` : month}-${`${day}`.length == 1? '0' + day : day}T${`${hour}`.length == 1? '0' + hour : hour}:${`${minute}`.length == 1? '0' + minute : minute}:00.000Z`
        let hourStringEnd = `${year}-${`${month}`.length == 1? `0${month}` : month}-${`${day}`.length == 1? '0' + day : day}T${`${hour}`.length == 1? '0' + hour : hour}:${`${minute+5}`.length == 1? '0' + (minute) : minute+5}:00.000Z`
        let from = new Date(hourString), to = new Date(hourStringEnd)
        let dato;
        if(from != 'Invalid Date' && to != 'Invalid Date'){
        dato = new Histo({
            IdEmpleado: empl,
            IdTarifa: tarPas,
            HoraDeInicio: from,
            HoraDeFin: to,
            IdPasos: tarPas,
            IdMueble: muebl
        })
        empl++;
        tarPas++;
        
        cont.push(dato);
        
        empl % 116 == 0 ? empl = 76 : ''
        tarPas % 12 == 0 ? (tarPas = 1, muebl++): ''
    }
    
    minute+=5
    minute % 65 == 0 ? (minute = 5, hour++) : ''
    hour % 17 == 0 ? (day++, hour = 7) : ''
    day % 31 == 0? (month++, day = 1) : ''
    month % 13 == 0 ? (month = 1, year++) : ''
    i++;
    }
}



// ***************************************************************************
// ************                INSERTING DATA                      ***********
// ***************************************************************************


try {
    for(const [i, v] of cont.entries()){   
        // Db.InsertarHistorialProduccion(v);
        i % 100 == 0? console.log(i+1) : ''
    }
} catch(err){console.log(err);}

// console.log(process.argv)

var menu = require('console-menu');
const { InsertarHistorialProduccion } = require('./db/dbconnection');
menu([
    { hotkey: '1', title: 'Transacciones por Fecha Aleatoria', selected: true },
    { hotkey: '2', title: 'Transacciones por Fecha Aleatoria y Tipo de Tarea'},
    { hotkey: '3', title: 'Transacciones por Fecha y Empleado'},
    { hotkey: '4', title: 'Unidades Trabajadas por Departamento'},
    { hotkey: '5', title: 'Unidades y Pagos Por Rango de Fechas'},
    { hotkey: '6', title: 'Unidades Por Dia y Departamento' },
    { hotkey: '7', title: 'Insertar Movimientos (HistorialProduccion)' },
    { hotkey: '8', title: 'Actualizar Movimientos (HistorialProduccion)' },
    { hotkey: '9', title: 'Eliminar Movimientos (HistorialProduccion)' },
    { separator: true },
    { hotkey: '?', title: 'Help' },
], {
    header: 'Eleccion de Stored Procedure',
    border: true,
}).then(item => {
    if (item) {
        // console.log(item.hotkey);
        const prompt = require("prompt-sync")();
        let manejadorResultados = []
        switch(parseInt(item.hotkey)){
            case 1:
                    console.log('\tTransacciones por Fecha Aleatoria\n');

                    const iter = prompt("Inserta cantidad de iteraciones: ");
                    console.clear();
                    console.log(`La seleccion será de '${iter} datos'.`);
                    console.log('\n\n\tPor favor espere, la generación de datos puede tardar algún tiempo...');
                    for(let prim = 0; prim < iter; prim++){
                        manejadorResultados.push(Db.ObtenerHistorialProduccion({
                            HoraDeInicio: date({from: new Date('2000-01-01'), to: new Date('2002-12-31')}).toJSON(),
                            HoraDeFin: date({from: new Date('2200-01-01'), to: new Date('2200-12-31')}).toJSON()
                        }))
                    }
                    console.log('');
                    manejadorResultados[0].then(dat => {
                        console.table(dat[0]);
                    })

                break;
                
            case 2:
                console.log('\tTransacciones por Fecha Aleatoria y Tipo de Tarea\n');
                const iter2 = prompt("Inserta cantidad de iteraciones: ");
                console.clear();
                console.log(`La seleccion será de '${iter2} datos'.`);
                console.log('\n\n\tPor favor espere, la generación de datos puede tardar algún tiempo...');
                let Id = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
                for(let prim = 0; prim < iter2; prim++){
                    manejadorResultados.push(Db.ObtenerHistorialPasosPeriodo({
                        HoraDeInicio: date({from: new Date('2000-01-01'), to: new Date('2002-12-31')}).toJSON(),
                        HoraDeFin: date({from: new Date('2200-01-01'), to: new Date('2200-12-31')}).toJSON(),
                        IdPaso: Id
                    }))
                }
                console.log('');
                manejadorResultados[0].then(dat => {
                    console.table(dat[0]);
                })
                break;
                
            case 3:
                console.log('\tTransacciones por Fecha y Empleado\n');
                const iter3 = prompt("Inserta cantidad de iteraciones: ");
                console.clear();
                console.log(`La seleccion será de '${iter3} datos'.`);
                console.log('\n\n\tPor favor espere, la generación de datos puede tardar algún tiempo...');
                let IdEmpleado = Math.floor(Math.random() * (115 - 76 + 1)) + 76;
                for(let prim = 0; prim < iter3; prim++){
                    manejadorResultados.push(Db.ObtenerHistorialEmpleadoPeriodo({
                        HoraDeInicio: date({from: new Date('2000-01-01'), to: new Date('2002-12-31')}).toJSON(),
                        HoraDeFin: date({from: new Date('2200-01-01'), to: new Date('2200-12-31')}).toJSON(),
                        IdEmpleado: IdEmpleado
                    }))
                }
                manejadorResultados[0].then(dat => {
                    console.table(dat[0]);
                })
                break;
                
            case 4:
                console.log('\tUnidades Trabajadas por Departamento\n');
                const iter4 = prompt("Inserta cantidad de iteraciones: ");
                console.clear();
                console.log(`La seleccion será de '${iter4} datos'.`);
                console.log('\n\n\tPor favor espere, la generación de datos puede tardar algún tiempo...');
                for(let prim = 0; prim < iter4; prim++){
                    manejadorResultados.push(Db.ObtenerHistorialDepartamento({
                        HoraDeInicio: date({from: new Date('2000-01-01'), to: new Date('2002-12-31')}).toJSON(),
                        HoraDeFin: date({from: new Date('2200-01-01'), to: new Date('2200-12-31')}).toJSON()
                    }))
                }
                manejadorResultados[0].then(dat => {
                    console.table(dat[0]);
                })
                break;

            case 5:
                console.log('\tUnidades y Pagos Por Rango de Fechas\n');
                const iter5 = prompt("Inserta cantidad de iteraciones: ");
                console.clear();
                console.log(`La seleccion será de '${iter5} datos'.`);
                console.log('\n\n\tPor favor espere, la generación de datos puede tardar algún tiempo...');
                for(let prim = 0; prim < iter5; prim++){
                    manejadorResultados.push(Db.ObtenerResumenActividad({
                        HoraDeInicio: date({from: new Date('2000-01-01'), to: new Date('2002-12-31')}).toJSON(),
                        HoraDeFin: date({from: new Date('2200-01-01'), to: new Date('2200-12-31')}).toJSON()
                    }))
                }
                manejadorResultados[0].then(dat => {
                    console.table(dat[0]);
                })
                break;
                
            case 6:
                console.log('\tUnidades Por Dia y Departamento\n');
                const iter6 = prompt("Inserta cantidad de iteraciones: ");
                console.clear();
                console.log(`La seleccion será de '${iter6} datos'.`);
                console.log('\n\n\tPor favor espere, la generación de datos puede tardar algún tiempo...');
                for(let prim = 0; prim < iter6; prim++){
                    manejadorResultados.push(Db.ResumenUnidadesDepa({
                        HoraDeInicio: date({from: new Date('2000-01-01'), to: new Date('2002-12-31')}).toJSON(),
                        HoraDeFin: date({from: new Date('2200-01-01'), to: new Date('2200-12-31')}).toJSON()
                    }))
                }
                manejadorResultados[0].then(dat => {
                    console.table(dat[0]);
                })
                break;

            case 7:
                console.log('\tInsertar Movimientos (HistorialProduccion)\n');
                const iter7 = prompt("Inserta cantidad de iteraciones: ");
                console.clear();
                console.log(`La seleccion será de '${iter7} datos'.`);
                console.log('\n\n\tPor favor espere, la insercion de datos puede tardar algún tiempo...');
                
                CrearHistorialProduccion(iter7);
                
                for(const [i, v] of cont.entries()){
                    Db.InsertarHistorialProduccion(v)
                }

                break;

            case 8:
                console.clear();
                console.log('\tActualizar Movimientos (HistorialProduccion)\n');
                console.log('\n\n\tFuncionalidad pendiente de agregar')
                break;
                
            case 9:
                console.log('\tEliminar Movimientos (HistorialProduccion)\n');
                console.log('\tInsertar Movimientos (HistorialProduccion)\n');
                const iter8 = prompt("Inserta Id a eliminar: ");
                console.clear();
                console.log('\n\n\tPor favor espere...');
                Db.EliminarHistorialProduccion(iter8)
                console.log('\n\n\tDato Eliminado.');
                break;
                
            default:
                console.clear();
                console.log('Consulta con el administrador para más detalles');
                console.log('\n\n\ttAdministrador: ProxusTeam');
                break;


        }

    } else {
        console.log('You cancelled the menu.');
    }
});