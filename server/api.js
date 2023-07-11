const express = require('express');
const app = express();
const userController = require('../server/controller/userController');

app.use(express.json()); // Recebe as informações no formato JSON

app.get('/', async (req, res) => {
  res.send('Página inicial');
});

app.post('/user/login', userController.login);
app.post('/user/cadastro', userController.cadastrar);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000: http://localhost:3000');
});
