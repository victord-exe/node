const os = require('os')
const path = require('path')
const platform = os.platform()
const arch = os.arch()
// unir rutsa con path.join
// crear las rutas es una mala practica

console.log('\n\n----------------------------')
console.log('   S.O: ', platform)
console.log('   Arquitectura: ', arch)
// Barra separadora de carpetas segun S.O
console.log('   separador del S.O.: ', path.sep)
console.log('----------------------------\n\n')

const filePath = path.join('folder', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/nidu-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/nide-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
