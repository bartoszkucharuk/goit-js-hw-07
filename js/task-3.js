const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    let realName = nameInput.value.trim();
    output.textContent = !realName ? "Anonymous" : realName;
});