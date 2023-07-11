const { DataTypes } = require('sequelize');
const db = require('./db');

const User = db.define('pessoa', {
  id_pessoa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'pessoa' //Referencia a tabela
});

const Login = db.define('usuario', {
  pessoa_id_pessoa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  senha: {
    type: DataTypes.STRING(50), // Verifique se o tamanho máximo está correto
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'usuario'
});
User.hasOne(Login, { foreignKey: 'pessoa_id_pessoa' });
Login.belongsTo(User, { foreignKey: 'pessoa_id_pessoa' });

module.exports = {
  User: User,
  Login: Login,
};