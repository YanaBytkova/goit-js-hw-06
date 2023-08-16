const rangeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');
// console.log(rangeInput);
// console.log(textOutput);

setOutput();
let str = "";
rangeInput.addEventListener("input", setOutput);

function setOutput() {
    
    const selectedOptionValue =  rangeInput.value + "px";
    let str = selectedOptionValue;
    // console.log(str);
    // console.log(selectedOptionValue);
    textOutput.style.fontSize = str;
    console.log(textOutput.style);
}


