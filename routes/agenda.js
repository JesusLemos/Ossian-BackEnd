var express = require('express');
var router = express.Router();

const addUser = require('../controller/addUser_controller');


// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Agenda' });
//   });
router.post('/adduser', addUser )

module.exports = router;