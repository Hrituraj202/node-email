const express = require('express')
const app = express()
const initRoutes = require('./routes/web')

app.use(express.urlencoded({extended: true}))

initRoutes(app)

const port = 80
app.listen(port, () => {
  console.log(`Hello, I'm running at localhost:${port}/`)
})
