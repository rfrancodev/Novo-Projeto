const express = require('express')
const { registerUser } = require('../controllers/users')

const rotas = express()

rotas.get('/usuarios', registerUser)

module.exports = rotas