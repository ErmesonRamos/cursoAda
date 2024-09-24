/*
  ! Continuação de alguns métodos de arrays

    ! every = todos
    ? Array.protype.every((elementos(todos os elementos de um array), indice(todos os indices de um array), arrayCompleto(Ele retorna todo array completo)));
      -> ela vai verificar se todos os elementos de um array seguem um determinada condição retornado a função tem que ser verdadeira dentro de todos os elementos
      * EXEMPLO: 
        const number = [1, 2, 3, 4, 5, 6, 7];

        const allPositive = number.every((elemento) => {
          return elemento > 0;
        })

        console.log(allPositive);
       
    ! some = alguns
    ? Array.protype.some((elementos(algum dos elementos de um array), indice(todos os indices de um array), arrayCompleto(Ele retorna todo array completo)));
      -> ele vai verificar se algum elemento do array torna verdadeira uma determinaada condição retornada pela função ele vai verificar se apenas um é verdadeiro dentro do array
      * EXEMPLO:
        const number2 = [1, 2, 3, 4, -1, 0];

        const returnNumber = number2.some((element) => element === -1);

        console.log(returnNumber);

    ! map = mapa
    ? Array.protype.map((elementos(todos os elementos de um array), indice(todos os indices de um array), arrayCompleto(Ele retorna todo array completo)));
      -> Um método do array que chama a função que passada como parâmentro para cada elemento do array, e devolve um novo array como resultado. Ele cria um novo array que possui o "mesmo tamanho do original", compostos com elementos que foram retornados em cada interação.

    ! Desestruturação de objetos ou spread(operator)
      *Exemplo:
        const person = {
          name: "Ermeson",
          age: 17,
          heigth: 1.70
        }

        // Desestruturação ou spread(operator)
        const personWithWeigth = {
          ...person,
          weigth: 79
        }

        console.log(personWithWeigth);

    ? Explicação
      Definição do Objeto person:

      Cria um objeto person com propriedades name, age e heigth.
      Uso do Spread Operator:

      Ao criar personWithWeigth, o spread operator (...person) copia todas as propriedades de person para o novo objeto.
      Adição da Propriedade weigth:

      Após as propriedades de person, é adicionada a nova propriedade weigth com o valor 79.
      Resultado Final:

      personWithWeigth agora contém todas as propriedades de person mais a nova propriedade weigth.
      Exibição no Console:

      O console.log imprime personWithWeigth, mostrando o objeto completo.


*/
// every

const number = [1, 2, 3, 4, 5, 6, 7];

const allPositive = number.every((elemento) => {
  return elemento > 0;
})

console.log(allPositive);

const persons = [
  {
    name: 'Pessoa1',
    age: 25,
    heigth: 1.70
  },

  {
    name: 'Pessoa2',
    age: 30,
    heigth: 1.60
  },

  {
    name: 'Pessoa3',
    age: 19,
    heigth: 1.90
  }
]

const everythingBiggerThanAge = persons.every((person) => person.age > 18);
console.log(everythingBiggerThanAge);

// some

const number2 = [1, 2, 3, 4, -1, 0];

const returnNumber = number2.some((element) => element === -1);

console.log(returnNumber);

