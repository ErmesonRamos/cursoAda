function readFilePromises() {
  return new Promise((resolve, reject) => {
    const fs = require("fs");
    fs.readFile("Java_Script/aula-13/arquivo.json", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo: ", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

readFilePromises()
  .then((returnOfResolution) => {
    console.log(`Deu certo: ${returnOfResolution}`);
  })
  .catch((err) => {
    console.log(`Deu erro: ${err}`);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executado indepêndente do sucesso ou fracasso da promessa, no final dela"
    );
  });