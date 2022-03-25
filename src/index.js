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



for (let i = 1; i <= process.argv[2]; i++) {
    Db.InsertPersonas(firstName(), lastName(), date({from: new Date('2000-01-01'), to: new Date('2000-05-01')})
    )
}

