const db = require('../models');

async function findOneUser(req, res) {
    
    db.Agenda.findOne({
        where:{
            id:req.params.id
        }
    }).then(item =>{
        return res.status(200).send(item)})
        .catch(err => console.error(err))
}

module.exports = findOneUser;