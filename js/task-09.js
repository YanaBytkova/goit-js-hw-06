
const titleBackgroundColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
let str = "";
const body = document.body;
const changeColorClick = () => {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

  let randomColor = getRandomHexColor();
  console.log(randomColor);
  titleBackgroundColor.textContent = randomColor;
  let str = randomColor;
  console.log(str);
  // console.log(selectedOptionValue);
  body.style.backgroundColor = str;

}



btnChangeColor.addEventListener("click", changeColorClick);