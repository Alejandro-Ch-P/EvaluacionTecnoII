let contador = 0;

const contadorMiddleware = (req, res, next) => {
    contador++;
    next();
};

const getOperacionCount = (req, res) => {
    res.status(200).json({ operacionesRealizadas: contador });
};

module.exports = { contadorMiddleware, getOperacionCount };
