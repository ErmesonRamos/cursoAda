const deacreaseButton = document.querySelector('#deacrease-button');
const increaseButton = document.querySelector('#increase-button');
const counter = document.querySelector('#counter');
const input = document.querySelector('#input');


deacreaseButton.addEventListener('click', () => {
  const valueCurrent = Number(counter.textContent) - 1;
  counter.textContent = valueCurrent;
});

increaseButton.addEventListener('click', () => {
  const valueCurrent = Number(counter.textContent) + 1;
  counter.textContent = valueCurrent;
});


//Serve para pegar cada digitação que está sendo passada pelo input.
input.addEventListener('input', () => {
  console.log(input.value);
});

//Adicionando estilos inline no elemento contador
counter.style.color = 'black';
counter.style.textAlign = 'center';
counter.style.padding = '0 2rem';
counter.style.border = '1px solid #aaa';
counter.style.width = '150px';

// Manipular classes
console.log(deacreaseButton.classList)
increaseButton.classList.add('btn');
deacreaseButton.style.backgroundColor = 'red'