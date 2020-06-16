const db = require('../models');

async function actualizarUsuario(req, res) {
    
    try{
        const usuario = await db.Agenda.findByPk(req.params.id)
        await usuario.update(req.body)
        res.json({
            message: 'usuario modificado', usuario
        })


    }catch(error) {
        console.error(error).res.status(500).json({ message: 'error al modificar producto'})
    }
    
}

module.exports = actualizarUsuario;