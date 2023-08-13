
const validInputLength = document.querySelector('input[data-length="6"]');
const textInput = document.querySelector('#validation-input');

// console.log(validInputLength.dataset.length); 
// let valueLength = 0;
textInput.addEventListener("input", (event) => {
    const valueLength = event.currentTarget.value.length;
    console.log(valueLength);
    
});

textInput.addEventListener("blur", (valueLength) => {
    if (valueLength = validInputLength.dataset.length) {
        textInput.classList.add("valid");
        
    }
    else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
});