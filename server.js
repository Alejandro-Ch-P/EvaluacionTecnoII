const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Middleware para parsear JSON en las peticiones


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
})
.catch((err) => {
    console.error('Error de conexión a MongoDB:', err);
});
