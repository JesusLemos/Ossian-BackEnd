var express = require('express');
var router = express.Router();

const addUser = require('../controller/addUser_controller');
const getAll = require('../controller/getAllUser_controller');
const findOneuser = require('../controller/findOneUser_controller');

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Agenda' });
//   });

router.get('/findoneuser/:id', findOneuser);
router.get('/getall', getAll);
router.post('/adduser', addUser );

module.exports = router;