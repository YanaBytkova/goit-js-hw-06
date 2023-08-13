const inputNumber = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const mainDiv = document.querySelector('#boxes');
let amount = 0;
const delta = 10;

inputNumber.addEventListener("input", (event) => {

    amount = event.currentTarget.value;
});


const createBoxes = () => {
  if (inputNumber.value != "" && ((amount >=1) && (amount <=100))) {
    for (let i = 0; i < amount; i += 1) {
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
    console.log("Please, enter box's number from [1] to [100]!")
  }
}
  
const destroyBoxes = () => {
  mainDiv.innerHTML = '';
  inputNumber.value = '';
  console.log("All creating boxes removed!!!");
}  


  createBtn.addEventListener("click", createBoxes);
  destroyBtn.addEventListener("click", destroyBoxes);


