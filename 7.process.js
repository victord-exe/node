// argumentos de entrada

console.log(process.argv)

// current working directory

console.log('Current working directory: ', process.cwd())

// platform
console.log('Variables de entorno: ', process.env.PEPITO)

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar recursos
})

// controlar el proceso y su salida
process.exit(0)
