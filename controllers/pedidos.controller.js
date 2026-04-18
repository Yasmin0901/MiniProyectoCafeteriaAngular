// Archivo: controllers/pedidos.controller.js
const model = require('../models/pedidos.model');

exports.create = (req, res) => {
    model.create(req.body, (err, folio) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al procesar el pedido' });
        }
        res.status(201).json({ mensaje: 'Pedido guardado con éxito', folio: folio });
    });
};