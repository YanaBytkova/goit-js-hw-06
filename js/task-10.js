const inputNumber = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const mainDiv = document.querySelector('#boxes');
let amount = 0;
let boxWidthStr = "";
let boxHeightStr = "";
const delta = 10;

inputNumber.addEventListener("input", (event) => {

    amount = event.currentTarget.value;
});


const createBoxes = () => {
  if (inputNumber.value != "") {
    for (let i = 1; i <= amount; i += 1) {
      const newBox = document.createElement("div");
      const calcBoxWidth = 20 + delta * i + "px";
      const calcBoxHeight = 20 + delta * i + "px";
      let boxWidth = calcBoxWidth;
      let boxHeight = calcBoxHeight;
      newBox.style.width = boxWidth;
      newBox.style.height = boxHeight;
      newBox.classList.add("new-box");
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
    console.log("Please, enter box's number!")
  }
}
  
const destroyBoxes = () => {
  const boxForRemove = document.querySelectorAll('.new-box');
  console.log(boxForRemove);
  boxForRemove.forEach(function (value) {
    value.remove();
  });
  
  console.log("All creating boxes removed!!!");
}  


  createBtn.addEventListener("click", createBoxes);
  destroyBtn.addEventListener("click", destroyBoxes);


