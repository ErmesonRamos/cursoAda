/*
  ! O que é programção assicrona.
    -> Programação assíncrona em JavaScript é uma maneira de fazer várias coisas ao mesmo tempo sem esperar que uma tarefa termine para começar outra. Isso é útil, especialmente em situações onde você precisa aguardar algo que pode demorar, como buscar dados de um servidor.

  ? Forma de se lidar com a programação Assincronismo.

  * 1. Por Callbacks = (Função de retorno ou chamada de retorno) -> setTimeout, .readFile().
    -> Uma callback é uma função que você passa como argumento para outra função. A ideia é que essa função "callback" será chamada (ou executada) em algum momento, geralmente após uma operação assíncrona ser concluída. Isso permite que o código continue executando outras tarefas enquanto espera pela conclusão da operação.

    * Exemplo:
      const fs = require('fs');
      console.log('ANTES da função de ler o arquivo');
      ? Função assicronas (Ler um arquivo leva um tempo);
      fs.readFile('Java_Script/aula-13/arquivo.json', (erro, conteudoDoArquivo) => {
        if(erro) {
          console.log('Ocorreu um erro ao tentar ler o arquivo: ', erro);
        } else {
          console.log(String(conteudoDoArquivo));
        }
      });
      console.log('DEPOIS da função de ler o arquivo');

  * 2. Promises = (Promessas).
    -> A promise é um objeto que guarda uma promessa que de que algo será realizado.
    -> È útil para casos em que estamos lidando com operações assicronas 
    -> A promessa estará em algum dos estados abaixos:
      1.Pending: A promise foi iniciada, mas está pedente.
      2.FullFiled: A promise foi concretizada com sucesso.
      3.Rejected: A promise foi rejeitada, porque houve um erro.
      -> Exemplos de utilização: pegar dados do back-end(API).
      ?.then(callback) = então;
        -> O método .then() em JavaScript é utilizado para lidar com promessas (Promises). Ele permite que você execute uma função assim que a promessa for resolvida, ou seja, quando uma operação assíncrona for concluída com sucesso
      ?.catch(callback) = pegar;
        -> O .catch() em JavaScript é um método usado em Promises para tratar erros. Ele permite que você especifique o que deve acontecer quando uma Promise é rejeitada, tornando o tratamento de erros mais organizado e legível.
      ?.finally(callback) = finalmente;
        -> Em JavaScript, o método .finally() é usado em Promises para executar um bloco de código após a conclusão de uma operação assíncrona, independentemente de a Promise ter sido resolvida ou rejeitada.
  * fetch
      -> O fetch é uma API do JavaScript que permite fazer requisições assíncronas para servidores, geralmente usada para obter ou enviar dados. Ele é uma maneira moderna e mais poderosa de lidar com requisições HTTP
  * 3. Resolvendo promisses ultilizando o Async/Await.
    -> Uma Promise é uma maneira poderosa de trabalhar com operações assíncronas em JavaScript, proporcionando um controle mais eficiente sobre o fluxo de execução e melhorando a legibilidade do código.

  * Obs. O JavaScript não executa primeiro a callback pós leva tempo então ele realiza primeiro as funcionalidades que não leva tempo(console.log('')) só então para realizar a callback

  ! setTimeout(callback, time) 
    -> E uma função que criar um timer
*/

// * 1. Callbacks

console.log("ANTES da função de ler o arquivo");

//Função assicronas (Ler um arquivo leva um tempo);

fs.readFile("Java_Script/aula-13/arquivo.json", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo: ", erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log("DEPOIS da função de ler o arquivo");

/* Exemplo 2*/

console.log("ANTES do setTimeout");
setTimeout(() => {
  console.log("Isso daqui vai ser executado após 2 segundos");
}, 2000);

console.log("DEPOIS do setTimeout");

/* 2. Promisses */



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


