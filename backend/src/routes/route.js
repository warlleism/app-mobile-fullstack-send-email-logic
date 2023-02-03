const express = require("express");
const Router = express.Router();
const contato = require('../controllers/sendEmail')

Router.post('/email', contato)

Router.get('/', (req, res) => {
    return res.json([{
        sucess: true,
        message: "Sucesso!"
    }])
})


module.exports = Router;