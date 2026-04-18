const express = require('express');
const router = express.Router();
const controller = require('../controllers/productos.controller');

// Log para verificar que el controlador cargó bien
console.log('Controlador de productos cargado:', controller);

// Obtener todos los productos
router.get('/', controller.getAll);

// Obtener por categoría
router.get('/categoria/:categoria', controller.getByCategoria);

// Obtener por ID, Actualizar y Eliminar
// Usamos :idPlatillo para que coincida con lo que espera el controlador (req.params.idPlatillo)
router.get('/:idPlatillo', controller.getById);
router.put('/:idPlatillo', controller.update);
router.delete('/:idPlatillo', controller.delete);

// Crear nuevo producto
router.post('/', controller.create);

module.exports = router;