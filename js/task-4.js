const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const formEmail = form.elements.email.value.trim();
    const formPassword = form.elements.password.value.trim();

    if (!formEmail || !formPassword) {
        alert(`All form fields must be filled in`);
    } else {
        const formData = { formEmail, formPassword };

        console.log(formData);
        form.reset();
    }
});