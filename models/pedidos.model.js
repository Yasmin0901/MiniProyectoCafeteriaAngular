// Archivo: models/pedidos.model.js
const db = require('../config/db');

exports.create = (datosPedido, callback) => {
    // Angular nos va a mandar esto: { idUsuario: 1, fecha: '2026-04-20', productos: [1, 4, 5] }
    const { idUsuario, fecha, productos } = datosPedido;

    // 1. Creamos el registro en la tabla 'pedido'
    const queryPedido = 'INSERT INTO pedido (idUsuario, fecha) VALUES (?, ?)';
    
    db.query(queryPedido, [idUsuario, fecha], (err, resultPedido) => {
        if (err) return callback(err);

        const idNuevoPedido = resultPedido.insertId; // Rescatamos el folio generado

        // 2. Insertamos los platillos en 'detalle_pedido'
        if (productos && productos.length > 0) {
            // Convertimos [1, 4] a [[idPedido, 1], [idPedido, 4]] para insertarlos de golpe
            const valoresDetalles = productos.map(idPlatillo => [idNuevoPedido, idPlatillo]);
            const queryDetalles = 'INSERT INTO detalle_pedido (idpedido, id_platillo) VALUES ?';

            db.query(queryDetalles, [valoresDetalles], (errDetalle) => {
                if (errDetalle) return callback(errDetalle);
                callback(null, idNuevoPedido); // Todo perfecto
            });
        } else {
            callback(null, idNuevoPedido); // Carrito vacío, pero se guardó la fecha
        }
    });
};