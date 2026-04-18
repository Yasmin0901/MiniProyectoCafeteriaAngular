/ Archivo: routes/pedidos.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidos.controller');

// Ruta POST para recibir el carrito
router.post('/', controller.create);

module.exports = router;