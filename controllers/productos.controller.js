const model = require('../models/productos.model');

// =========================
// OBTENER TODOS
// =========================
exports.getAll = (req, res) => {
  model.getAll((err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

// =========================
// OBTENER POR ID
// =========================
exports.getById = (req, res) => {

  const idPlatillo = req.params.idPlatillo;

  model.getById(idPlatillo, (err, data) => {
    if (err) return res.status(500).json(err);

    res.json(data[0]);
  });
};

// =========================
// CREAR
// =========================
exports.create = (req, res) => {
  model.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: 'Producto creado' });
  });
};

// =========================
// ACTUALIZAR
// =========================
exports.update = (req, res) => {

  const idPlatillo = req.params.idPlatillo;

  model.update(idPlatillo, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: 'Producto actualizado' });
  });
};

// =========================
// ELIMINAR
// =========================
exports.delete = (req, res) => {

  const idPlatillo = req.params.idPlatillo;

  model.delete(idPlatillo, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: 'Producto eliminado' });
  });
};

// =========================
// POR CATEGORIA
// =========================
exports.getByCategoria = (req, res) => {

  const categoria = req.params.categoria;

  model.getByCategoria(categoria, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};