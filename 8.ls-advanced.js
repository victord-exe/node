const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let fileStats

    try {
      fileStats = await fs.stat(filePath) // status -- info del archivo
    } catch (err) {
      console.error(`no se pudo leer el archivo ${filePath}: ${err}`)
      process.exit(1)
    }

    const isDirectory = fileStats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = fileStats.size
    const fileModified = fileStats.mtime.toLocaleString()

    return `${pc.bgMagenta(fileType)} ${pc.blue(file)} ${pc.green(fileSize.toString())} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => {
    if (fileInfo) {
      console.log(fileInfo)
    }
  })
}

ls(folder)
