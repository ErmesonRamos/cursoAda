/*
  ! O que é programção assicrona.
    -> Programação assíncrona em JavaScript é uma maneira de fazer várias coisas ao mesmo tempo sem esperar que uma tarefa termine para começar outra. Isso é útil, especialmente em situações onde você precisa aguardar algo que pode demorar, como buscar dados de um servidor.

  ? Forma de se lidar com a programação Assincronismo.

  * 1. Por Callbacks = (Função de retorno ou chamada de retorno).
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
    -> Uma Promise em JavaScript é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu resultado. Ela é uma maneira mais estruturada de lidar com operações assíncronas em comparação com callbacks.
  * 3. Resolvendo promisses ultilizando o Async/Await.
    -> Uma Promise é uma maneira poderosa de trabalhar com operações assíncronas em JavaScript, proporcionando um controle mais eficiente sobre o fluxo de execução e melhorando a legibilidade do código.

  * Obs. O JavaScript não executa primeiro a callback pós leva tempo então ele realiza primeiro as funcionalidades que não leva tempo(console.log('')) só então para realizar a callback

  ! setTimeout(callback, time) 
    -> E uma função que criar um timer
*/

const fs = require('fs');


// * 1. Callbacks

console.log('ANTES da função de ler o arquivo');

//Função assicronas (Ler um arquivo leva um tempo);

fs.readFile('Java_Script/aula-13/arquivo.json', (erro, conteudoDoArquivo) => {
  if(erro) {
    console.log('Ocorreu um erro ao tentar ler o arquivo: ', erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log('DEPOIS da função de ler o arquivo');



/* Exemplo 2*/


console.log('ANTES do setTimeout');
setTimeout(() => {
  console.log('Isso daqui vai ser executado após 2 segundos');
}, 2000);

console.log('DEPOIS do setTimeout');