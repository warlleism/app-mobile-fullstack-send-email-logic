const express = require("express");
const Router = express.Router();
const contato = require('../controllers/sendEmail')

Router.get('/email', contato)

module.exports = Router;