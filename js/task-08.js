const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "" ) {
        console.log("Please fill in all the fields!");
    }

    // console.log(`Login: ${email.value}, Password: ${password.value}`);
    const user = {
        login : email.value,
        password : password.value,
    }
    console.log("Object:", user);
    event.currentTarget.reset();
}