function greeting(courseName) {
  return (studantName) => {
    return console.log(`Olá ${studantName} Seja bem-vindo(a) ao curso de ${courseName}`);
  }
  
}

const otherFunction = greeting('Front-end em React');

otherFunction('Ermeson');

console.log(otherFunction);