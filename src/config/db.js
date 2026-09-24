const mongoose = require('mongoose');
require('dotenv').config();

const conectarDB = async () => {
    try {
        await
            mongoose.connect(process.env.MONGODB_URI);
        console.log('Conectado ao MongoDB!');
    } catch (erro) {
        console.error('Erro:', erro.message);
    }
};
module.exports = conectarDB;
