require('dotenv').config();
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// CONECTAR API
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

// Rutas básicas
app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

app.get('/status', (req, res) => {
    res.json({ status: "OK" });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
