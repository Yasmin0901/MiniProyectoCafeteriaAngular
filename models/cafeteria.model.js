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

exports.deleteProducto = (id, callback)=>{
    db.query(
        'DELETE FROM productos WHERE id=?',
        [id],
        callback
    );
};