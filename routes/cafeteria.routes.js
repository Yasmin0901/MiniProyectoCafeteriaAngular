const express = require('express');
const router = express.Router();

const controller = require('../controllers/cafeteria.controller');

// --- RUTAS PARA PRODUCTOS (Panel Admin) ---
router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:id', controller.delete);

// --- RUTAS PARA PEDIDOS (Carrito) ---
// 🎯 Esta es la nueva ruta que recibirá el JSON con el nombre y la fecha
router.post('/pedido', controller.createOrder);

module.exports = router;