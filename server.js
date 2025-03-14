const express = require('express');
const app = express();
const port = 3000;

//importamos las rutas y el middleware
const usuarioRoutes = require('./routes/UsuarioRoutes');
const productoRoutes = require('./routes/ProductoRoutes');
const { contadorMiddleware, getOperacionCount } = require('./middleware/ContadorMiddleware');

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ExamenTecno2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión a MongoDB exitosa');
});


// Rutas de endpoints
app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
//contador
app.use(contadorMiddleware);

app.get('/contadores', async (req, res) => {
    try {
        const usuariosCount = await mongoose.model('Usuario').countDocuments();
        const productosCount = await mongoose.model('Producto').countDocuments();
        res.status(200).json({
            usuarios: usuariosCount,
            productos: productosCount
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Endpoint para ver el número de operaciones realizadas
app.get('/operaciones', getOperacionCount);