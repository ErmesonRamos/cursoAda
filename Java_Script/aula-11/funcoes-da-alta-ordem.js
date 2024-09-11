/*
  ! Funções de alta ordem
    -> Funções que recebem outras funções como argumentos ou retornam funções como resultados.
  ? First Class Function
    -> Uma linguagem de programação é tem First Class Function quando as funções nessa linguagem são tratadas como qualquer outra variavel.

    -> Uma função pode ser passada como paramnetro para outra função, assim como podee ser retornada por uma função e essa retorna pode ser atribuida a uma variavel
  ? High Order Function
    -> Uma função que recebe outra função como parâmentro/argumento, ou uma função que retorna outra função.
    1. Função que retorna outra função como parâmentro(Cloujure).
      * Exemplo: 
        function welcome(courseName) {
          return (studantName) => {
            return console.log(`Olá ${studantName} Seja bem-vindo(a) ao curso de ${courseName}`);
          }
          
        }
        const displayWelcomeToFrontEndCourse = welcome('Front-end em React');
        displayWelcomeToFrontEndCourse('Ermeson');
        console.log(displayWelcomeToFrontEndCourse);
    2. Função que recebe outra função como parâmentro.
      * Exemplo:
        const add = (num1, num2) => num1 + num2;
        const subtract = (num1, num2) => num1 - num2;
        const multiply = (num1, num2) => num1 * num2;
        const division =(num1, num2) => num1 / num2;
        ? operation: Função que realiza a operação entre dois numéros ou seja ela precisa ser uma função que receba dois numéros 
        const add = (num1, num2) => num1 + num2;
        const subtract = (num1, num2) => num1 - num2;
        const multiply = (num1, num2) => num1 * num2;
        const division =(num1, num2) => num1 / num2;

        const calculete = (num1, num2, operation) => operation(num1, num2);

        const result = calculete(3, 3, add);
        console.log(result);
  ! Funções de alta ordem de arrays
    -> Quando aplicamos esse conceito a arrays, estamos falando sobre funções que operam em arrays e utilizam outras funções para transformar ou processar os elementos do array.
    ? 1.array.forEach(itens dentro do array(elementos), indice dos nossos elementos(index), ele mostra tudo o array (arrayCompleto) );
        -> em JavaScript é uma função de alta ordem usada para iterar sobre os elementos de um array. Ele aplica uma função de callback a cada elemento do array em ordem, mas, ao contrário de alguns outros métodos de iteração, forEach() não retorna um novo array e não altera o array original. Em vez disso, ele é usado para executar um código em cada item do array.
        * Exemplo:
          const numbers = [1, 2, 3, 4, 5, 6, 7];
          numbers.forEach((element) => {
            console.log(element);
          });

      
*/

function welcome(courseName) {
  return (studantName) => {
    return console.log(`Olá ${studantName} Seja bem-vindo(a) ao curso de ${courseName}`);
  }
}

const displayWelcomeToFrontEndCourse = welcome('Front-end em React');
const displayWelcomeToBackEndCourse = welcome('Back-end em Node.js');

displayWelcomeToFrontEndCourse('Ermeson');
displayWelcomeToBackEndCourse('Alessandro');

console.log(displayWelcomeToFrontEndCourse);
console.log(displayWelcomeToBackEndCourse);

console.clear()

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division =(num1, num2) => num1 / num2;

const calculete = (num1, num2, operation) => operation(num1, num2);

const result = calculete(3, 3, add);
console.log(result);
