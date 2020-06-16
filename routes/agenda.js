var express = require('express');
var router = express.Router();

const añadirUsuario = require('../controller/añadirUsuario_controller');
const obtenerTodos = require('../controller/obtenerTodos_controller');
const buscarUnUsuario = require('../controller/buscarUnUsuario_controller');
const actualizarUsuario = require('../controller/actualizarUsuario_controller');
const borrarUsuario = require('../controller/borrarUsuario_controller');

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Agenda' });
//   });

router.get('/obtenertodos', obtenerTodos);
router.get('/usuario/:id', buscarUnUsuario);

router.post('/anadirusuario', añadirUsuario );


router.patch('/actualizar/:id', actualizarUsuario)
router.delete('/eliminar/:id', borrarUsuario);

module.exports = router;