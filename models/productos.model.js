const db = require('../config/db');

// OBTENER TODOS
exports.getAll = (callback) => {
    db.query('SELECT * FROM platillo', callback);
};

// OBTENER POR ID
exports.getById = (id, callback) => {
    db.query(
        'SELECT * FROM platillo WHERE id=?',
        [id],
        callback
    );
};

// CREAR
exports.create = (platillo, callback) => {
    db.query(
        'INSERT INTO platillo SET ?',
        platillo,
        callback
    );
};

// ACTUALIZAR
exports.update = (id, platillo, callback) => {
    db.query(
        'UPDATE platillo SET ? WHERE id=?',
        [platillo, id],
        callback
    );
};

// ELIMINAR
exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM platillo WHERE id=?',
        [id],
        callback
    );
};

// POR CATEGORÍA
exports.getByCategoria = (categoria, callback) => {
    db.query(
        'SELECT * FROM platillo WHERE categoria=?',
        [categoria],
        callback
    );
};