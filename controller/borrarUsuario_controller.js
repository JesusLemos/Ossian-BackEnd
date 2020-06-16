
const db = require('../models');
async function borrarUsuario(req, res) {
    
    try{
        const user = await db.Agenda.findOne(req.param.id)

        await user.destroy()
        res.json({
            message: 'usuario eliminado de la agenda', user
        })


    }catch(error) {
        console.error(error).res.status(500).json({ message: 'error al borrar producto'})
    }
    
}

module.exports = borrarUsuario;