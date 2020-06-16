
const db = require('../models')
async function obtenerTodos  (req, res) {
    try{
        const contactos = await db.Agenda.findAll()
        console.log(contactos)
        res 
        .status(200)
        .send(contactos)

    }catch(error){
        console.error('Algo fallo')
    }
}

module.exports = obtenerTodos;