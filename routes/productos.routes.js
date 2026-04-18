const express = require('express');
const router = express.Router();

const controller = require('../controllers/productos.controller');
console.log(controller);

router.get('/', controller.getAll);

router.get('/categoria/:categoria', controller.getByCategoria);

router.get('/:idPlatillo', controller.getById);

router.post('/', controller.create);
router.put('/:idPlatillo', controller.update);
router.delete('/:idPlatillo', controller.delete);

module.exports = router;