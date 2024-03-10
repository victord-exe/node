
const { readFile } = require ('node:fs/promises')

console.log('\n\nRunning 4.fs-async-await.js\n')
;(
    async function init () {
        console.log('\nLeyendo el primer archivo archivo...')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto: ', text)

        console.log('\nHacer cosas mientras lee el archivo.')

        console.log('\nLeyendo el segundo archivo archivo...')

        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto: ', secondText)
    }
)()


