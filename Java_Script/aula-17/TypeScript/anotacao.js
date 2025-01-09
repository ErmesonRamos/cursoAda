/*
  ! TypeScript I
    -> Nada mas é que do que o JavaScript com a adição de tipagem estatíca.
    * Por que estudar o TypeScript
      -> Types.
      -> Utilização de um JS mais recente (Compilado para funcionar em browsers mais antigos).
      -> Adiciona recursos, que não existem no JS (ex: Interfaces e Generics).
      -> Muitas opções de configurações.
      -> Melhores sugestão de codígo em IDEs que têm um suporte melhor ao TS.
    * Como utilizar o TypeScript
      -> O TypeScript é configurado com o node.js
    * Configurações do TypeScript 
      1. Inicializar um projeto Node.js 
      1.1. `nmp init ou -y`
      2. Instalar o TypeScript 
        2.1. Instalação Global (Instala o TypeScript na máquina toda). -> `npm install -g typescript`
        2.2. Instalação Local (Instalção dentro do projeto). -> `npm install typescript -D`
      3. Utilizar o TypeScript para transpilar o nosso codígo 
      3.1. `npx tsc 'nomedoarquivoparasercompliado --watch'`
      4. Mexer nas configurações do TypeScript
        4.1 `npx tsc --init`

  ! TypeScript II
    * Tipagens

    -> Inferência de tipos o TypeScript indêntifica o tipo de dado quando eu passo direto para a variável. 

    1.1. Numeros = Number
    1.2. Letras e caracteres = String
    1.3. verdadeiro ou falso = Boolean
    1.4. Arrays = {
      * Exemplo 1: 
        1.1. const myArray: number[] = [1, 2, 4, 5];
      * Exemplo 2:
        1.1. const myArrayRandom: (number | string)[] = ['Ermeson', 17, 1.70];
      * Exemplo 3:
        1.1. const myOtherArray: Array<number>  = [1, 2, 3, 4,];    
    }
    * Tuplas
      -> Sempre vai ter dois valores com o mesmo objetivo.
      ->Exemplo: const person: [string, number] = ['Ermeson', 17];

    * Object Types 
      -> São objetos que possuem um nome e um tipo de dados para cada chave.
      -> Exemplo: const person: {name: string, age: number} = {name: 'Ermeson', age: 17};
      * Interface 
        -> uma interface é uma estrutura que define a forma de um objeto. Ela serve como um contrato, especificando quais propriedades e métodos um objeto deve ter, incluindo seus tipos, mas sem implementar a lógica desses métodos. Interfaces são úteis para garantir que diferentes partes do código sigam um padrão consistente.

        const person: Person = {
        name: 'Ermeson',
        age: 17,
        work: 'Develop',
        heigth: 1.70
      }


      //Interface
      interface Person {
        name: string;
        age: number;
        work?: string; -> Essa ? significa que o atributo não é obrigatorio.
        heigth: number;
      }


    ? Evite sempre utilizar o any para tipagem em TypeScript você está anulando o TypeScript.

*/

