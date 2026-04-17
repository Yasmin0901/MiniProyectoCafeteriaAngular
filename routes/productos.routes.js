const express = require('express');
const router = express.Router();

const controller = require('../controllers/productos.controller');
console.log(controller);

router.get('/', controller.getAll);

router.get('/categoria/:categoria', controller.getByCategoria);

router.get('/:id', controller.getById);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;