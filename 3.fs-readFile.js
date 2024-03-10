const fs = require('node:fs')

console.log('\nLeyendo el primer archivo archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log('\nHacer cosas mientras lee el archivo.')

console.log('\nLeyendo el segundo archivo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text)
})