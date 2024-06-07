<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log(`All form fields must be filled in`);
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}