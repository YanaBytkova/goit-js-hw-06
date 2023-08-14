const inputNumber = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const mainDiv = document.querySelector('#boxes');
let amount = 0;
const step = Number(inputNumber.step);
const min = Number(inputNumber.min);
const max = Number(inputNumber.max);
const delta = 10;

inputNumber.addEventListener("input", (event) => {

    amount = event.currentTarget.value;
});


function createBoxes() {
  if ((amount >= min) && (amount <= max)) {
    for (let i = 0; i < amount; i += step) {
      const newBox = document.createElement("div");
      let sizeBoxWidth = 30 + delta * i + "px";
      let sizeBoxHeight = 30 + delta * i + "px";
      newBox.style.width = sizeBoxWidth;
      newBox.style.height = sizeBoxHeight;
     
      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }
      let randomColor = getRandomHexColor();
      newBox.style.backgroundColor = randomColor;
      mainDiv.insertAdjacentElement('beforeEnd', newBox);
      
    }
  }
  else {
    alert("Please, enter box's number from [1] to [100]!");
  }
}
  
const destroyBoxes = () => {
  mainDiv.innerHTML = '';
  inputNumber.value = '';
  alert("All creating boxes removed!!!");
}  


  createBtn.addEventListener("click", createBoxes);
  destroyBtn.addEventListener("click", destroyBoxes);


