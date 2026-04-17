const db = require('../config/db');

exports.getAll = (callback)=>{
    db.query('SELECT * FROM productos', callback);
};

exports.getById = (id,callback)=>{
    db.query(
        'SELECT * FROM productos WHERE id=?',
        [id],
        callback
    );
};

exports.create = (producto,callback)=>{
    db.query(
        'INSERT INTO productos SET ?',
        producto,
        callback
    );
};

exports.update = (id,producto,callback)=>{
    db.query(
        'UPDATE productos SET ? WHERE id=?',
        [producto,id],
        callback
    );
};

exports.delete = (id,callback)=>{
    db.query(
        'DELETE FROM productos WHERE id=?',
        [id],
        callback
    );
};

exports.getByCategoria = (categoria,callback)=>{
    db.query(
        'SELECT * FROM productos WHERE categoria=?',
        [categoria],
        callback
    );
};