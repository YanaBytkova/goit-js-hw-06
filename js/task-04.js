let counterValue = 0;
const valuesCounter = document.querySelector('#value');
const plusBtn = document.querySelector('button[data-action="decrement"]');
const minusBtn = document.querySelector('button[data-action="increment"]');
// console.log("start:", valuesCounter.textContent);

const plusClick = () => {
  counterValue -= 1;
    // console.log(counterValue + 1);
    valuesCounter.textContent = counterValue;
};
const minusClick = () => {
    counterValue += 1;
    // console.log(counterValue - 1);
    valuesCounter.textContent = counterValue;
};
plusBtn.addEventListener("click", plusClick);
minusBtn.addEventListener("click", minusClick);

