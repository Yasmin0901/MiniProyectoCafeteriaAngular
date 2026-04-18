const model = require('../models/cafeteria.model');

// --- SECCIÓN DE PRODUCTOS (Panel de Admin) ---

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

// --- SECCIÓN DE PEDIDOS (Carrito de Compras) ---

/**
 * 🎯 Recibe los datos del carrito de Angular y los manda al modelo
 */
exports.createOrder = (req,res)=>{
    // req.body traerá el objeto "datosPedido" { fecha, nombre_cliente }
    model.createOrder(req.body, (err, result)=>{
        if(err) {
            console.error("Error al guardar pedido:", err);
            return res.status(500).json(err);
        }
        
        // Respondemos con éxito y devolvemos el ID generado por la base de datos
        res.json({
            mensaje: "¡Pedido guardado correctamente!",
            idpedido: result.insertId 
        });
    });
};