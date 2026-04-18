require('dotenv').config();

const express = require('express');
const cors = require('cors');


const productosRoutes = require('./routes/productos.routes');
const cafeteriaRoutes = require('./routes/cafeteria.routes'); 
const errorMiddleware = require('./middleware/error.middlewares');

const app = express();

app.get('/', (req, res) => {
    res.send('API Midnight Cafeteria funcionando 🚀');
});

// 2. MIDDLEWARES GENERALES
app.use(cors());
app.use(express.json());

// 3. TUS RUTAS (En orden)
app.use('/api/productos', productosRoutes);
app.use('/api/cafeteria', cafeteriaRoutes);

// 4. EL MIDDLEWARE DE ERRORES (Este SIEMPRE debe ir al final)
app.use(errorMiddleware);

// 5. INICIAR EL SERVIDOR
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto " + process.env.PORT);
});