const pool = require("../connections/conection")

const listCategory = async (req, res) => {
    const categoria = await pool.query('select * from categorias')
    return res.status(200).json(categoria.rows)
}

module.exports = {
    listCategory
}