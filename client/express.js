const express = require('express')
const app = express()

const port = 4000

app.use('/', express.static('client'));
app.use('/shared', express.static('shared'));

app.listen(port, () => {
  console.log('WebServer is now listening port %s', port)
})
