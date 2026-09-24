const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
conectarDB();
const app = express();
app.use(express.json());
app.use(cors());
const profileRoutes = require('./routes/profileRoutes');
const projectRoutes = require('./routes/projectRoutes');
const technologyRoutes = require('./routes/technologyRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use('/api/profiles', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/technologies', technologyRoutes);
app.use('/api/feedbacks', feedbackRoutes);

app.get('/', (req, res) => {
    res.json({ mensagem: 'API rodando!' });
});
const swaggerConfing = require('./swagger/swaggerConfig');
swaggerConfing(app);
app.use((req, res) => {
    res.status(404).json
        ({
            erro: 'Rota não encontrada',
            mensagem: 'Verifique o endereço digitado'
        });
});
const erroHandler = require('./middlewares/erroHandler');
app.use(erroHandler);
module.exports = app;
