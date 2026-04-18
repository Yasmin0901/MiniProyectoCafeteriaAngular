const db = require('../config/db');

// OBTENER TODOS
exports.getAll = (callback) => {
    db.query('SELECT * FROM productos', callback);
};

// OBTENER POR ID
exports.getById = (idPlatillo, callback) => {
    db.query(
        'SELECT * FROM productos WHERE id=?',
        [idPlatillo],
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
exports.update = (idPlatillo, producto, callback) => {
    db.query(
        'UPDATE productos SET ? WHERE id=?',
        [producto, idPlatillo],
        callback
    );
};

// ELIMINAR
exports.delete = (idPlatillo, callback) => {
    db.query(
        'DELETE FROM productos WHERE id=?',
        [idPlatillo],
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