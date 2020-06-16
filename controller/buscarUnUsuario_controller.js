const db = require('../models');

async function buscarUnUsuario(req, res) {
    
    db.Agenda.findOne({
        where:{
            id:req.params.id
        }
    }).then(item =>{
        return res.status(200).send(item)})
        .catch(err => console.error(err))
}

module.exports = buscarUnUsuario;