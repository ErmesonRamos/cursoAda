interface IPerson {
  name: string;
  age: number;
  height: number;
  weight: number;
  sleep: () => void;
}

// Classe: abstração
//Definindo a abstração de uma pessoa
class Person implements IPerson {
  // Atributos: Características(variáveis)
  name: string;
  age: number;
  height: number;
  weight: number;
  private _cpf: string;

  // métodos: ação(Funções)

  // Método construtor
  constructor(name: string, age: number, height: number, weight: number, cpf: string) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this._cpf = cpf;
  }
  sleep() {
    console.log('Dormindo....');
  }

  // accessor: getter
  get cpf(): string {
    return this._cpf;
  }

  // accessor: setter
  set cpf(newCpf: string) {
    this._cpf = newCpf;
  }

};

// Criando/Instanciando uma pessoa(Indivíduo / Objeto) a partir da definição da classe Person

const person1 = new Person('Ermeson', 17, 1.70, 80, '108.010.353-84');

console.log(person1);
console.log(person1.cpf);

