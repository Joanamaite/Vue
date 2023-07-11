const express = require('express');
const app = express();
const userController = require('../server/controller/userController');
const cors = require('cors');
app.use(cors())
app.use(express.json()); // Recebe as informações no formato JSON

app.get('/', async (req, res) => {
  res.send('Página inicial');
});

app.post('/user/login', userController.login);

app.post('/aluno/cadastro', userController.cadastrar);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000: http://localhost:3000');
});