function greetingToTheStudants(nameFromStudant, course="curso não definido ainda") {
  return `Olá, seja bem-vindo(a) ao curso de ${course} ! ${nameFromStudant}`;
}

const massageFromGreeting1 = greetingToTheStudants('Ermeson', 'Front-end em React');
const massageFromGreeting2 = greetingToTheStudants('Alessando');
console.log(massageFromGreeting1);
console.log(massageFromGreeting2);