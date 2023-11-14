// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         user: process.env.DB_USER,
//         port: process.env.DB_PORT,
//         host: process.env.DB_HOST,
//         database: process.env.DB_DATA,
//         password: process.env.DB_PASS,
//     }
// })

// module.exports = knex

const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require"
})
module.exports = pool;