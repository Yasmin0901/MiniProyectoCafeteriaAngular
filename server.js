require('dotenv').config();

const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos.routes');
const errorMiddleware = require('./middleware/error.middlewares');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRoutes);
app.use(errorMiddleware);
const cafeteriaRoutes = require('./routes/cafeteria.routes');

app.use('/api/cafeteria', cafeteriaRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo");
});