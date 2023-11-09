require('./connections/node_modules/dotenv/lib/main').config()
const express = require('express')
const rotas = require('./routes/route')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(rotas)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor esta ativa na porta ${port}`);
})

