let counter = 0;
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
const plusButton = document.getElementById('plus');
const counterElement = document.getElementById('counter');

minusButton.addEventListener('click', () => {
  counter -= 1;
  counterElement.textContent = counter;
});

resetButton.addEventListener('click', () => {
  counter = 0;
  counterElement.textContent = counter;
});

plusButton.addEventListener('click', () => {
  counter++;
  counterElement.textContent = counter;
});
