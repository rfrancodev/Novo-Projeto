const express = require('express')
const { registerUser } = require('../controllers/users')
const { listCategory } = require('../controllers/category')

const rotas = express()

rotas.get('/usuarios', registerUser)
rotas.get('/categorias', listCategory)

module.exports = rotas