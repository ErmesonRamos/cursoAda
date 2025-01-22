const deacreaseButton = document.querySelector('#deacrease-button');
const increaseButton = document.querySelector('#increase-button');
const counter = document.querySelector('#counter');

deacreaseButton.addEventListener('click', () => {
  const valueCurrent = Number(counter.textContent) - 1;
  counter.textContent = valueCurrent;
});

increaseButton.addEventListener('click', () => {
  const valueCurrent = Number(counter.textContent) + 1;
  counter.textContent = valueCurrent;
});