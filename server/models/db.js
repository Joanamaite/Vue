const Sequelize = require('sequelize');
const sequelize = new Sequelize('infocimol', 'root', 'janela1434', {
  host: 'localhost',
  dialect: 'mysql'
});

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'janela1434',
  database: `infocimol`
});

connection.connect(function(err) {
  if (!err) {
    console.error('Conectado ao banco de dados');
  } else {
    console.error('Erro ao se conectar: ', err);
  }
});

module.exports = sequelize;
/*
//connection.query("SELECT * FROM pessoa", function(err, results, fields) {
  if (!err) {
    console.log("Resultado da tabela pessoa: ", results);
  } else {
    console.log("Erro na consulta da tabela pessoa: ", err);
  }
});

connection.query("SELECT * FROM professor", function(err, results, fields) {
  if (!err) {
    console.log("Resultado da tabela professor:", results);
  } else {
    console.log("Erro na consulta da tabela professor: ", err);
  }
})*/