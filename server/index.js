require('dotenv').config()
const express = require('express'),
          bodyParser = require('body-parser'),
          cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})