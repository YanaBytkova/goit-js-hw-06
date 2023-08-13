
const titleBackgroundColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
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
  // console.log(selectedOptionValue);
  body.style.backgroundColor = randomColor;

}



btnChangeColor.addEventListener("click", changeColorClick);