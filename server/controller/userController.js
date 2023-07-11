// controllers/userController.js
const { User, Login } = require('../models/User');

const userController = {
  login: async (req, res) => {
    const { email, senha } = req.body;
    try {
      const pessoa = await User.findOne({ where: { email } });

      if (!pessoa) {
        return res.status(400).json({ erro: true, mensagem: 'Usuário não encontrado' });
      }
      const usuario = await Login.findOne({ where: { pessoa_id_pessoa: pessoa.id_pessoa } });

      if (usuario.senha !== senha) {
        return res.status(400).json({ erro: true, mensagem: 'Senha incorreta' });
      }

      console.log('Usuário logado com sucesso:', pessoa.toJSON());

      return res.status(200).json({ erro: false, mensagem: 'Usuário logado com sucesso' });
    } catch (error) {
      console.error('Erro ao logar o usuário:', error);
      return res.status(400).json({ erro: true, mensagem: 'Erro interno do servidor' });
    }
  },

  cadastrar: async (req, res) => {
    console.log(req.body); // Verifica o valor de req.body
    const { nome, email } = req.body;
    try {
      const pessoa = await User.create({
        nome,
        email,
      });
      console.log('Usuário cadastrado com sucesso:', pessoa.toJSON());

      return res.status(200).json({
        erro: false,
        mensagem: 'Usuário cadastrado com sucesso'
      });
    }catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: usuário não cadastrado'
      });
    }
  }
};

module.exports = userController;