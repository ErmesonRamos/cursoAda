const fs = require("fs");


// * 1. Callbacks

//Função assincrona (Ler um arquivo leva um tempo)
fs.readFile("arquivo.txt", (erro, conteudoDoArquivo) => {
  if(erro) {
    console.log('Ocorreu um erro ao tentar ler o arquivo: ', erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});