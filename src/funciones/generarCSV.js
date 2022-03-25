// if(!fs.existsSync(path.join(__dirname, 'result'))){
//     fs.mkdir(path.join(__dirname, 'result'), (err) => {return console.log(err);})
// }

// if(!fs.existsSync(path.join(__dirname, 'result') + `/result.csv`)){
//     fs.writeFile(path.join(__dirname, 'result') + `/result.csv`, '', err => {console.log(err);})
//     let filepath = path.join(__dirname, 'result') + `/result.csv`
//     fs.appendFileSync(filepath, 'IdPersona;Nombre;Apellido;Genero\n', 'utf-8', {flags: 'a'} )
// } 

// try {
//     // let fileNumber = 0;
//     // const stream = fs.createWriteStream(path.join(__dirname, 'result') + `/result.csv`);
//     // fs.readdir(path.join(__dirname, 'result') + `/result.csv`, (err, files) => {
//     //     fileNumber = files?.length || 0;
//     // })
//     // let gen = '';
//     // // stream.once('open', (fd) => {
//         // //     stream.write(`${firstName({gender: gen})}, ${lastName({gender: gen})}, ${gen},\n`)

//         // //     stream.end()
//         // // })

//         let counter = process.argv[2]? process.argv[2] : 10
//         for(let i = 2214252; i <= (counter + 2214252); i++){
//         i % 2 == 0 ? gen = 'male' : gen = 'female'
//         let filepath = path.join(__dirname, 'result') + `/result.csv`
//         let text = `${ i};${firstName({gender: gen})};${lastName({gender: gen})};${gen}\n`
//         fs.appendFileSync(filepath, text, '', {flags: 'a'} )
//     }
// } catch(err){console.log(err);}

// // // let dat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for(const it of dat){
// //     console.log(`${date({from: new Date('2000-01-01'), to: new Date('2000-05-01')})}`.split(' ')[0])
// // }  

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

//  ******************************************************************************************************


if(!fs.existsSync(path.join(__dirname, 'ParaImportar'))){
    fs.mkdir(path.join(__dirname, 'ParaImportar'), (err) => {return console.log(err);})
}

if(!fs.existsSync(path.join(__dirname, 'ParaImportar') + `/Mueble.csv`)){
    fs.writeFile(path.join(__dirname, 'ParaImportar') + `/Mueble.csv`, '', err => {console.log(err);})
    let filepath = path.join(__dirname, 'ParaImportar') + `/Mueble.csv`
    fs.appendFileSync(filepath, 'Descripcion\n', 'utf-8', {flags: 'a'} )
} 

let tipos = ['silla', 'mesa', 'sillon', 'mesa de noche', 'closet', 'escritorio', 'mecedora', 'banco', 'zapatera',
    'alacena', 'comedor',]
try {
        let counter = process.argv[2]? process.argv[2] : 10
        for(let i = 1; i <= counter; i++){
        // i % 2 == 0 ? gen = 'male' : gen = 'female'
        let filepath = path.join(__dirname, 'ParaImportar') + `/Mueble.csv`
        
        let text = `${tipos[Math.floor(Math.random() * (10 - 1 + 1)) + 1]}\n`
        i % 10000 == 0? console.log(i) : ''
        fs.appendFileSync(filepath, text, '', {flags: 'a'} )
    }
} catch(err){console.log(err);}


//  ******************************************************************************************************

