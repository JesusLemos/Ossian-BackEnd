const db = require('../models')


async function addUser(req, res) {
    console.log('req',req)
        try {
            const agenda = await db.Agenda.create(req.body)
            res.status(200).json({
                message: 'register done',
                agenda: agenda,
            });
    
        } catch (error) {
            console.error(error).res.status(500).json({ message: 'error al añadir producto' })
        }
}

module.exports = addUser;