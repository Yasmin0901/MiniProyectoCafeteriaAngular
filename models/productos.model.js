const db = require('../config/db');

// OBTENER TODOS
exports.getAll = (callback) => {
    db.query('SELECT * FROM productos', callback);
};

// OBTENER POR ID
exports.getById = (id, callback) => {
    db.query(
        'SELECT * FROM productos WHERE id=?',
        [id],
        callback
    );
};

// CREAR
exports.create = (producto, callback) => {
    db.query(
        'INSERT INTO productos SET ?',
        producto,
        callback
    );
};

// ACTUALIZAR
exports.update = (id, producto, callback) => {
    db.query(
        'UPDATE productos SET ? WHERE id=?',
        [producto, id],
        callback
    );
};

// ELIMINAR
exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM productos WHERE id=?',
        [id],
        callback
    );
};

// POR CATEGORÍA
exports.getByCategoria = (categoria, callback) => {
    db.query(
        'SELECT * FROM productos WHERE categoria=?',
        [categoria],
        callback
    );
};