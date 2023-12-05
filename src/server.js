const express = require('express')
const initRoutes = require('./routes/web')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initRoutes(app)

const port = 8080
app.listen(port, () => {
  console.log(`Hello, I'm running at localhost:${port}/`)
})
