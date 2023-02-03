const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./src/routes/route')


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.listen(3001, () => {
    console.log('conectar')
})

app.use(routes)
