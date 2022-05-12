// const fs = require('fs');//fs sta per file sistem

// function readCsv(params) {
//     try { //quando non si è sicuri del codice si può scrivere i try che funzionera come un 'if else'
//         const data = fs.readFileSync('./libro.csv', 'utf8');
//         console.log(data);
//     } catch (err){ 
//         throw err;
//     }
// }


// try{
// readCsv()
// } catch (error) {
//     console.log('la funzione non funziona')
// }

// let data;

// try {
//     data = fs.readFileSync('./libri.csv', 'utf8');

// } catch (err) {
//     console.error('file non trovato');
// }

// let pippo = {nome: 'pippo', dob: 2021}

// console.log(pippo['nome']) //uguale a mettere pippo.nome

// pippo ['cognome'] = 'de pippis'

// console.log(pippo['cognome'])

//! 1) spezzare la nostra stringa in un array di linee usando split
//!  const lines = ['title,autor,price,copies', 'iliade,omero,15.00,5', 'odissea,omero,12.00,3', 'i promessi sposi,manzoni,20.00,10']

//! 2) creo una variabile chiamata properties che conterra un array con le parole di cui è composta la prima linea

//! const properties = ['title'; 'author'; 'price'; 'copies';]
//! let lines = ['iliade,omero,15.00,5', 'odissea,omero,12.00,3', 'i promessi sposi,manzoni,20.00,10']  (usare la funzione split per spezza)

//! 3) creo un array vuoto per gli oggetti 

//! 4) faccio un ciclo su tutte le linee dentro lines
//! -creo un nuovo oggetto vuoto.
//! trasformo la linea in un array di parole es: const lineArray = ['iliade', 'omero', '15.00', '5]
//! -faccio un ciclo interno per ogni parola dentro properties
//! -aggiungo al nuovo oggetto una proprietà con il nome della proprietà e associando il valore corrispondente nella linea;
//! -infilo il mio oggetto nel array vuoto
//! 5) faccio console.log del array

const fs = require('fs');

let data;

try {

    data = fs.readFileSync('./libri.csv', 'utf8');

} catch (err) {
    console.error('file non trovato');
}

let bookList = data.split(/\r?\n/);
let lines = lines.filter(linea => linea !== ''); 
//  per togliere ultima linea vuota, che può capitare; 

let properties = [];

for (let i = 0; i < bookList.length; i++) {
    const element = bookList[i];
    if(element === bookList [0]){
        properties = element.split(',')
    } 

   
}

bookList.shift();

let bookArray = []

    for (let j = 0; j < bookList.length; j++) {
        const line = bookList[j];
        const object = {}
        const lineArray = line.split(',')
        for (let k = 0; k < properties.length; k++) {
            const property = properties[k]; 
            
//          property = property.trim()
            object[property] = lineArray[k];
        }
        bookArray.push(object)
    }

console.log(bookArray);

// try { //quando non si è sicuri del codice si può scrivere i try che funzionera come un 'if else'
//     const data = fs.readFileSync('./libri.csv', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err.message);
// } finally {
//     console.log('sono nel blocco finally')
// } 

//  trasformare file in JSON: 

const jsonArray = JSON.stringify(bookArray); 

console.log('json array', jsonArray); 

try {
    fs.writeFileSync('./output.json', jsonArray);
} catch (err) {
    console.error(err);
} 

//  funzione trim per togliere spazi;