const express = require('express')
const app = express()
const { getSVG, getViewBox } = require('./consultas/queries')
const port = 3000

//cors
var cors = require('cors')
app.use(cors())

app.get('/getSvg/:nome', getSVG)
app.get('/getViewBox/:nome', getViewBox)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})