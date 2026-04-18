const db = require('../config/db');

exports.getProductos = (callback)=>{
    db.query('SELECT * FROM productos', callback);
};

exports.createProducto = (producto, callback)=>{
    db.query(
        'INSERT INTO productos SET ?',
        producto,
        callback
    );
};

exports.deleteProducto = (idPlatillo, callback)=>{
    db.query(
        'DELETE FROM productos WHERE id=?',
        [idPlatillo],
        callback
    );
};