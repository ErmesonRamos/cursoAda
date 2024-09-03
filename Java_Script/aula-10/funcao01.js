/*
  ! O que são funções?
    -> são blocos de codígos que a gente construi e que nos permite reutilizar.
    ? Uso de return
      -> Ele ajuda tornando o uso de funções mais flexiveis ultilizando variaveis para a armazenação de contéudo.
    ? Parâmentro padrão
      -> Parâmentro opcional que possui um valor padrão caso não seja passado.
      *Exemplo:
        function greetingToTheStudants(nameFromStudant, course="curso não definido ainda");

  ! DRY - Don't Reapt Yourself
  -> Princípio de programação que diz que não devemos repetir codígo.
  ! Template string ou template literais
  -> Uso de crase para inserção de variaveis dentro de um texto.
  *Exemplo:
    console.log(`${variavel}`)
  
*/

function greetingToTheStudants(nameFromStudant, course="curso não definido ainda") {
  return `Olá, seja bem-vindo(a) ao curso de ${course} ! ${nameFromStudant}`;
}

const massageFromGreeting1 = greetingToTheStudants('Ermeson', 'Front-end em React');
const massageFromGreeting2 = greetingToTheStudants('Alessando');
console.log(massageFromGreeting1);
console.log(massageFromGreeting2);
