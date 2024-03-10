const fs = require('node:fs')

console.log('\nLeyendo el primer archivo archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto: ', text)

console.log('\nHacer cosas mientras lee el archivo.')

const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('\nLeyendo el segundo archivo archivo...', secondText)
