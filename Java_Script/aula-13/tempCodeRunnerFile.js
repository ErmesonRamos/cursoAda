console.log('ANTES da crição da promise');
const promessa = new Promise((resolve, reject) => {
  const fs = require("fs");
  fs.readFile("Java_Script/aula-13/arquivo.json", (erro, conteudoDoArquivo) => {
    if (erro) {
      reject("Ocorreu um erro ao tentar ler o arquivo: ", erro);
    } else {
      resolve(String(conteudoDoArquivo));
    }
  });
}); //Criando uma promessa
console.log('DEPOIS da crição da promise');