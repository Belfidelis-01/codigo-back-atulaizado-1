const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');
const authController = require('./controllers/authController');

dotenv.config(); // Carrega o .env
const app = express();
app.use(express.json()); // Permite leitura de JSON
app.use(cors()); // Permite cross plataform para utilizar o client e server em localhost
// Rota pública: criar novo usuário
app.post('/registrar', authController.registrar);

// Rota pública: login e geração do token
app.post('/login', authController.login);

// Rota protegida: acessível para qualquer usuário autenticado
 app.put('/atualizar', authController.atualizar);

// Sincroniza os modelos com o banco e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Servidor da clínica rodando na porta 5000"));
});


git add *
git commit -m "primeiro commit" 
git branch -M main 
git remote add origin https://github.com/Belfidelis-01/codigo-back-atulaizado-1.git
 git push -u origin main
