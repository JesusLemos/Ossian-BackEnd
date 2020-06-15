var express = require('express');
var router = express.Router();

const addUser = require('../controller/addUser_controller');
const getAll = require('../controller/getAllUser_controller');
const findOneuser = require('../controller/findOneUser_controller');
const filterUser = require('../controller/filterUser_controller');
const updateUser = require('../controller/updateUser_controller');
const deleteUser_controller = require('../controller/deleteUser_controller');

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Agenda' });
//   });

router.get('/getall', getAll);
router.get('/findoneuser/:id', findOneuser);
router.get('/filteruser/:nombre', filterUser);
router.post('/adduser', addUser );


router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser_controller);

module.exports = router;