const express = require('express')
const app = express()

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
}
app.use(allowCrossDomain)

app.use('/', express.static('swagger-ui'))

app.use('/editor', express.static('swagger-editor'))

const server = app.listen(8001, () => {
  console.log('server is running on port 8001')
})

server.setTimeout(0)
