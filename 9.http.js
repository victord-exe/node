const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PUERTO ?? 3000
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello world')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port: http://localhost:${server.address().port}`)
  })
})
