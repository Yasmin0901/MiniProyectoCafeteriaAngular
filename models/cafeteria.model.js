const db = require('../config/db');

// --- SECCIÓN DE PRODUCTOS ---

exports.getProductos = (callback) => {
    db.query('SELECT * FROM productos', callback);
};

exports.createProducto = (producto, callback) => {
    db.query(
        'INSERT INTO productos SET ?',
        producto,
        callback
    );
};

// 🛠️ Cambio importante: Se usa idplatillo para que coincida con tu DB
exports.deleteProducto = (idPlatillo, callback) => {
    db.query(
        'DELETE FROM productos WHERE idplatillo = ?',
        [idPlatillo],
        callback
    );
};

// --- SECCIÓN DE PEDIDOS ---

/**
 * 🎯 Guarda la compra en la tabla 'pedido'
 * Recibe un objeto con { fecha, nombre_cliente } desde Angular
 */
exports.createOrder = (datosPedido, callback) => {
    db.query(
        'INSERT INTO pedido SET ?',
        datosPedido,
        callback
    );
};