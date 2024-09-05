/*
  ! Funções de alta ordem
    -> Funções que recebem outras funções como argumentos ou retornam funções como resultados.
  ? First Class Function
    -> Uma linguagem de programação é tem First Class Function quando as funções nessa linguagem são tratadas como qualquer outra variavel.

    -> Uma função pode ser passada como paramnetro para outra função, assim como podee ser retornada por uma função e essa retorna pode ser atribuida a uma variavel
  ? High Order Function
    -> Uma função que recebe outra função como parâmentro/argumento, ou uma função que retorna outra função.
    1. Função que retorna outra função como parâmentro(Cloujure).
    2. Função que recebe outra função como parâmentro.
      * Exemplo: 
        function welcome(courseName) {
          return (studantName) => {
            return console.log(`Olá ${studantName} Seja bem-vindo(a) ao curso de ${courseName}`);
          }
          
        }
        const displayWelcomeToFrontEndCourse = welcome('Front-end em React');
        displayWelcomeToFrontEndCourse('Ermeson');
        console.log(displayWelcomeToFrontEndCourse);
*/

function welcome(courseName) {
  return (studantName) => {
    return console.log(`Olá ${studantName} Seja bem-vindo(a) ao curso de ${courseName}`);
  }
  
}

const displayWelcomeToFrontEndCourse = welcome('Front-end em React');

displayWelcomeToFrontEndCourse('Ermeson');

console.log(displayWelcomeToFrontEndCourse);