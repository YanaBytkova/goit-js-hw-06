
const validInputLength = document.querySelector('input[data-length="6"]');
const textInput = document.querySelector('#validation-input');
const number = Number(validInputLength.dataset.length);
// console.log(typeof(number), number); 
textInput.addEventListener("input", (event) => {
    const valueLength = event.currentTarget.value.trim().length;
    // console.log(typeof(valueLength), valueLength);
    textInput.addEventListener("blur", () => {
        if (valueLength === number) {
            textInput.classList.add("valid");
            textInput.classList.remove("invalid");
        }
        else {
            textInput.classList.add("invalid");
            textInput.classList.remove("valid");
        }
        
    });
});

