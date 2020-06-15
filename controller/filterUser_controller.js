const db = require('../models');
const Op = require('sequelize').Op;

async function filterUser(req, res){
    const user = req.params.nombre
    try{
        const filterUser = await db.Agenda.findAll({
            where: {
                nombre:{
                    [Op.like]: `%${user}%`
             }
         }    
        })
        if(filterUser){
        return   res
            .status(200)
            .send(filterUser)
        }else {
            return res.status(400).json( {message: `No se ha encontrado producto`})
        }
    }catch (error) {
        console.log(error);
    
    }
} 

module.exports = filterUser;