// Classe: abstração
//Definindo a abstração de uma pessoa
class Person {
  // Atributos: Características(variáveis)
  name: string;
  age: number;
  height: number;
  // métodos: ação(Funções)

  // Método construtor
  constructor(name: string, age: number, height: number) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  sleep() {
    console.log('Dormindo....');
  }
};

// Criando/Instanciando uma pessoa(Indivíduo / Objeto) a partir da definição da classe Person

const person1 = new Person('Ermeson', 17, 1.70);