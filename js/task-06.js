
const validInputLength = document.querySelector('input[data-length="6"]');
const textInput = document.querySelector('#validation-input');

// console.log(validInputLength.dataset.length); 
let valueLength = 0;
textInput.addEventListener("input", (event) => {
    valueLength = event.currentTarget.value.length;
    console.log(valueLength);
});

textInput.addEventListener("blur", () => {
    if (valueLength > validInputLength.dataset.length) {
        textInput.classList.add("invalid");
    } else {
         textInput.classList.add("valid");
         textInput.classList.remove("invalid");
    }
});