const { firstName, lastName, date } = require('minifaker');
require('minifaker/locales/es')

const fs = require('fs');
const path = require('path')

const Db = require('./db/dbconnection');
const { setTimeout } = require('timers/promises');


// function InsertarPersonas(i) {
//     setTimeout(
//         Db.InsertPersonas({
//             Nombre: firstName(),
//             Apellido: lastName(),
//             Fecha: date({ from: new Date('2000-02-04 19:00:00.000'), to: new Date('2000-02-04 19:10:00.000') })
//         }), 500 * i);
// }

// **********************************************************************************************************
// *************************************** FOR GENERATE FILES ***********************************************
// **********************************************************************************************************


// if(!fs.existsSync(path.join(__dirname, 'ParaImportar'))){
//     fs.mkdir(path.join(__dirname, 'ParaImportar'), (err) => {return console.log(err);})
// }

// if(!fs.existsSync(path.join(__dirname, 'ParaImportar') + `/Mueble.csv`)){
//     fs.writeFile(path.join(__dirname, 'ParaImportar') + `/Mueble.csv`, '', err => {console.log(err);})
//     let filepath = path.join(__dirname, 'ParaImportar') + `/Mueble.csv`
//     fs.appendFileSync(filepath, 'IdPersona; IdDepartamento; IdPuesto\n', 'utf-8', {flags: 'a'} )
// } 

// let tipos = ['silla', 'mesa', 'sillon', 'mesa de noche', 'closet', 'escritorio', 'mecedora', 'banco', 'zapatera',
//     'alacena', 'comedor',]
// try {
//         let counter = process.argv[2]? process.argv[2] : 10
//         for(let i = 1; i <= counter; i++){
//         // i % 2 == 0 ? gen = 'male' : gen = 'female'
//         let filepath = path.join(__dirname, 'ParaImportar') + `/Mueble.csv`
        
//         // let text = `${tipos[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}\n`
//         let text = `${firstName()};${lastName()};${date({from: new Date('1980-01-01'), to: new Date('2000-01-01')})}\n`
//         i % 10000 == 0? console.log(i) : ''
//         fs.appendFileSync(filepath, text, '', {flags: 'a'} )
//     }
// } catch(err){console.log(err);}

// **********************************************************************************************************
// *************************************** FOR GENERATE FILES ***********************************************
// **********************************************************************************************************


// // let dat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(const it of dat){
//     console.log(`${date({from: new Date('2000-01-01'), to: new Date('2000-05-01')})}`.split(' ')[0])
// }  

// function removeTime(date){
//     return new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         date.getDate()
//     );
// }

// // let dat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(const it of dat){
//     console.log(removeTime(date({from: new Date('2000-01-01'), to: new Date('2000-05-01')})))
//     // console.log(`${date({from: new Date('2000-01-01'), to: new Date('2000-05-01')})}`.split(' ')[0])
// } 



// function InsertarMuebles(descripcion) {
//     Db.InsertarMuebles(descripcion)
// }


// for (let i = 1; i <= process.argv[2] / 11; i++) {
//     for (const d of tipos) {
//         InsertarMuebles(d)
//     }
// }



// for (let i = 1; i <= process.argv[2]; i++) {
//     Db.InsertPersonas(firstName(), lastName(), date({from: new Date('2000-01-01'), to: new Date('2000-05-01')})
//     )
// }

// let object = new Object(
//     IdHistorial: 0,
//     IdEmpleado: 0,
//     IdTarifa: 0,
//     HoraDeInicio: 0,
//     HoraDeFin: 0,
//     IdPasos: 0,
//     IdMueble: 0
// )

function Histo(hist){
    // this.IdHistorial = hist.IdHistorial
    this.IdEmpleado = hist.IdEmpleado
    this.IdTarifa = hist.IdTarifa
    this.HoraDeInicio = hist.HoraDeInicio
    this.HoraDeFin = hist.HoraDeFin
    this.IdPasos = hist.IdPasos
    this.IdMueble = hist.IdMueble
}


// let cont = []

// for (let i = 1, empl = 1, tarPas = 1; i <= process.argv[2]; i++, empl++, tarPas++) {    
//     let dato = new Histo({
//         IdEmpleado: empl,
//         IdTarifa: tarPas,
//         HoraDeInicio: date({from: new Date('2000-01-01T07:05:00.000Z'), to: new Date('2000-01-01T07:20:00.000Z')}),
//         HoraDeFin: date({from: new Date('2000-01-01T07:21:00.000Z'), to: new Date('2000-01-01T07:31:00.000Z')}),
//         IdPasos: tarPas,
//         IdMueble: i
//     })

//     empl % 40 == 0 ? empl = 0 : ''
//     tarPas % 11 == 0 ? tarPas = 0 : ''

//     cont.push(dato);
// }

// console.table(cont)

let cont = []

// function randomDate(start, end, startHour, endHour, startMinute, endMinute) {
//     var date = new Date(+start + Math.random() * (end - start));
//     var hour = startHour + Math.random() * (endHour - startHour) | 0;
//     var minute = startMinute + Math.random() * (endMinute - startMinute) | 0;
//     date.setHours(hour);
//     date.setMinutes(minute)
//     return date;
//   }

//   const generateRandomDOB = () => {
//     const random = getRandomDate(new Date('1950-02-12T01:57:45.271Z'), new Date('2001-02-12T01:57:45.271Z'))
//     return random.toISOString();
// }

// function getRandomDate(from, to) {
//     const fromTime = from.getTime();
//     const toTime = to.getTime();
//     return new Date(fromTime + Math.random() * (toTime - fromTime));
// }



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

let year = 2000, month = 1, day = 1, hour = 7, minute = 5
for (let i = 1, empl = 76, tarPas = 1, muebl = 1; i <= process.argv[2]; '') {   
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
    // console.log(hourString);

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
// year % 2023 == 0 ? i = process.argv[2]: ''
i++;
}

// console.table(cont)

// for(const c of cont ){
//     console.log(`${c.IdTarifa};${c.HoraDeInicio.toJSON()};${c.HoraDeFin.toJSON()};${c.IdPasos};${c.IdMueble}`)  
// }


// **********************************************************************************************************
// *************************************** FOR GENERATE FILES ***********************************************
// **********************************************************************************************************


// if(!fs.existsSync(path.join(__dirname, 'ParaImportar'))){
//     fs.mkdir(path.join(__dirname, 'ParaImportar'), (err) => {return console.log(err);})
// }

// if(!fs.existsSync(path.join(__dirname, 'ParaImportar') + `/HistorialProduccion.csv`)){
//     fs.writeFile(path.join(__dirname, 'ParaImportar') + `/HistorialProduccion.csv`, '', err => {console.log(err);})
//     let filepath = path.join(__dirname, 'ParaImportar') + `/HistorialProduccion.csv`
//     fs.appendFileSync(filepath, 'IdEmpleado;IdTarifa;HoraDeInicio;HoraDeFin;IdPasos;IdMueble\n', 'utf-8', {flags: 'a'} )
// } 



// try {
//         // let counter = process.argv[2]? process.argv[2] : 10
//         for(const [i, v] of cont.entries()){
//         // i % 2 == 0 ? gen = 'male' : gen = 'female'
//         let filepath = path.join(__dirname, 'ParaImportar') + `/HistorialProduccion.csv`
            
//         // let text = `${tipos[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}\n`
//         let text = `${v.IdEmpleado};${v.IdTarifa};${v.HoraDeInicio.toJSON().replace('T', ' ').replace('Z', '')};${v.HoraDeFin.toJSON().replace('T', ' ').replace('Z', '')};${v.IdPasos};${v.IdMueble}\n`
        
//         i % 10000 == 0? console.log(i+1) : ''
//         fs.appendFileSync(filepath, text, '', {flags: 'a'} )
//         // console.log(text);
//     }
// } catch(err){console.log(err);}

// **********************************************************************************************************
// *************************************** FOR GENERATE FILES ***********************************************
// **********************************************************************************************************

try {
    // let counter = process.argv[2]? process.argv[2] : 10
    for(const [i, v] of cont.entries()){
        // let text = `${v.IdEmpleado};${v.IdTarifa};${v.HoraDeInicio.toJSON().replace('T', ' ').replace('Z', '')};${v.HoraDeFin.toJSON().replace('T', ' ').replace('Z', '')};${v.IdPasos};${v.IdMueble}\n`
        
        i % 10000 == 0? console.log(i+1) : ''
        Db.InsertarHistorialProduccion(v);



    }
} catch(err){console.log(err);}