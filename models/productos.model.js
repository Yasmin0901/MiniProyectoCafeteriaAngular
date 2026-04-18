const db = require('../config/db');

// OBTENER TODOS
exports.getAll = (callback) => {
  db.query('SELECT * FROM productos', callback);
};

// OBTENER POR ID
exports.getById = (idPlatillo, callback) => {
  db.query(
    'SELECT * FROM productos WHERE idplatillo=?',
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
    'UPDATE productos SET ? WHERE idplatillo=?',
    [producto, idPlatillo],
    callback
  );
};

// ELIMINAR
exports.delete = (idPlatillo, callback) => {
  db.query(
    'DELETE FROM productos WHERE idplatillo=?',
    [idPlatillo],
    callback
  );
};

// POR CATEGORIA
exports.getByCategoria = (categoria, callback) => {
  db.query(
    'SELECT * FROM productos WHERE categoria=?',
    [categoria],
    callback
  );
};