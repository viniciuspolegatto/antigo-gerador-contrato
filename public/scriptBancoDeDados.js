/*
const botao1 = document.querySelector("#b1");
const botao2 = document.querySelector("#b2");
const listaDeFrutas =["pera", "banana", "melancia"]

const texto = document.querySelector("h1");
const valorDoHtml = texto.innerHTML

// -- CÓDIGO PARA MONITORAMENTO DO CLICK NO BOTÃO
botao1.addEventListener("click", function()
{
  botao1.innerHTML = "Você Clicou!!!" 
  console.log( listaDeFrutas[0] )
  texto.innerHTML = listaDeFrutas[0]
})








document.getElementById('enviaBD').addEventListener('click', async function() {
  var nomeBD = document.getElementById('nomeCons').value;
  var cpfBD = document.getElementById('cpfCons').value;
  var emailBD = document.getElementById('emailCons').value;
  var telBD = document.getElementById('telCons').value;
  var enderecoBD = document.getElementById('enderecoCons').value;
  
  localStorage.setItem('nomeBD', nomeBD);
  localStorage.setItem('cpfBD', cpfBD)
  localStorage.setItem('emailBD', emailBD);
  localStorage.setItem('telBD', telBD);
  localStorage.setItem('enderecoBD', enderecoBD)
});

  
var nomeBD = localStorage.getItem("nomeBD");
var cpfBD = localStorage.getItem("cpfBD");
var emailBD = localStorage.getItem("emailBD");
var telBD = localStorage.getItem("telBD");
var enderecoBD = localStorage.getItem("enderecoBD");
*/

var nomeBD = "afafafafaf";
var cpfBD = "afafafafafa";
var emailBD = "vixeVixeVixe";
var telBD = "Frankfurt";
var enderecoBD = "Oxi_Congonhas";

var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO ClientesSEBRAE (nome, cpf, email, telefone, endereco) VALUES ?";
  
var values = [
    [nomeBD, cpfBD, emailBD, telBD, enderecoBD]
  ];
  

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

  
  
  
//    var values = [nomeBD, cpfBD, emailBD, telBD, enderecoBD];
//    ('${nomeBD}', '${cpfBD}', '${emailBD}', '${telBD}', '${enderecoBD}');
//    ('nomeBD', 'cpfBD', 'emailBD', 'telBD', 'enderecoBD')
// $sql = "INSERT INTO users (name, contact) VALUES ('$name', '$contact')";
// '$nomeBD', '$cpfBD', '$emailBD', '$telBD', '$enderecoBD'
//  ['$nomeBD', '$cpfBD', '$emailBD', '$telBD', '$enderecoBD'],

