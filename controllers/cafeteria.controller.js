const model = require('../models/cafeteria.model');

exports.getAll = (req,res)=>{
    model.getProductos((err,data)=>{
        if(err) return res.status(500).json(err);
        res.json(data);
    });
};

exports.create = (req,res)=>{
    model.createProducto(req.body,(err,result)=>{
        if(err) return res.status(500).json(err);
        res.json({mensaje:"Producto creado"});
    });
};

exports.delete = (req,res)=>{
    model.deleteProducto(req.params.id,(err)=>{
        if(err) return res.status(500).json(err);
        res.json({mensaje:"Producto eliminado"});
    });
};