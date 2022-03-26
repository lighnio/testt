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
    { hotkey: '1', title: 'Transacciones por Fecha', selected: true },
    { hotkey: '2', title: 'Transacciones por Fecha y Tipo de Tarea'},
    { hotkey: '3', title: 'Resumen por Actividad, Pagos y Cant. de Unidades' },
    { hotkey: '4', title: 'Unidades Trabajadas por Fecha' },
    { hotkey: '5', title: 'Insertar Movimientos (HistorialProduccion)' },
    { hotkey: '6', title: 'Actualizar Movimientos (HistorialProduccion)' },
    { hotkey: '7', title: 'Eliminar Movimientos (HistorialProduccion)' },
    { separator: true },
    { hotkey: '?', title: 'Help' },
], {
    header: 'Eleccion de Stored Procedure',
    border: true,
}).then(item => {
    if (item) {
        // console.log(item.hotkey);
        let manejadorResultados = []
        switch(parseInt(item.hotkey)){
            case 1:
                    const prompt = require("prompt-sync")();
                    console.log('\tTransacciones por Fecha\n');

                    // console.log('Formato de Fechas 2000-12-31 14:30:30.00');
                    // console.log('\n');
                    // const from = prompt("Inserta primer fecha: ");
                    // console.log(`Tu primer fecha es '${from}'.`);
                    // console.log('\n');
                    // const to = prompt("Inserta segunda fecha: ");
                    // console.log(`Tu segunda fecha es '${to}'.`);
                    // console.log('\n');
                    const iter = prompt("Inserta cantidad de iteraciones: ");
                    console.clear();
                    console.log(`La seleccion será de '${iter} datos'.`);
                    for(let prim = 0; prim < iter; prim++){
                        manejadorResultados.push(Db.ObtenerHistorialProduccion(
                            date({from: new Date('2000-01-01'), to: new Date('2002-12-31')}),
                            date({from: new Date('2003-01-01'), to: new Date('2004-12-31')})
                        ))
                    }
                    console.log(manejadorResultados);

                break;
                
            case 2:
                console.log('\tTransacciones por Fecha y Tipo de Tarea\n');
                break;
                
            case 3:
                console.log('\tResumen por Actividad, Pagos y Cant. de Unidades\n');
                break;
                
            case 4:
                console.log('\tUnidades Trabajadas por Fecha\n');
                break;

            case 5:
                console.log('\tInsertar Movimientos (HistorialProduccion)\n');
                    // CrearHistorialProduccion()
                break;
                
            case 6:
                console.log('\tActualizar Movimientos (HistorialProduccion)\n');
                break;

            case 7:
                console.log('\tEliminar Movimientos (HistorialProduccion)\n');
                break;
                
            default:
                console.log('Ayuda?');
                break;


        }

    } else {
        console.log('You cancelled the menu.');
    }
});