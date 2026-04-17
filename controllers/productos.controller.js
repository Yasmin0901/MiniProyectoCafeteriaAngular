const model = require('../models/productos.model');

exports.getAll = (req,res)=>{
    model.getAll((err,data)=>{
        if(err) return res.status(500).json(err);
        res.json(data);
    });
};

exports.getById = (req,res)=>{
    model.getById(req.params.id,(err,data)=>{
        if(err) return res.status(500).json(err);
        res.json(data[0]);
    });
};

exports.create = (req,res)=>{
    model.create(req.body,(err)=>{
        if(err) return res.status(500).json(err);
        res.json({mensaje:'Producto creado'});
    });
};

exports.update = (req,res)=>{
    model.update(req.params.id,req.body,(err)=>{
        if(err) return res.status(500).json(err);
        res.json({mensaje:'Producto actualizado'});
    });
};

exports.delete = (req,res)=>{
    model.delete(req.params.id,(err)=>{
        if(err) return res.status(500).json(err);
        res.json({mensaje:'Producto eliminado'});
    });
};

exports.getByCategoria = (req,res)=>{
    const categoria = req.params.categoria;

    model.getByCategoria(categoria,(err,data)=>{
        if(err) return res.status(500).json(err);
        res.json(data);
    });
};