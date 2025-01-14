"use strict";
// Classe: abstração
//Definindo a abstração de uma pessoa
class Person {
    // métodos: ação(Funções)
    // Método construtor
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sleep() {
        console.log('Dormindo....');
    }
}
;
// Criando/Instanciando uma pessoa(Indivíduo / Objeto) a partir da definição da classe Person
const person1 = new Person('Ermeson', 17, 1.70);
