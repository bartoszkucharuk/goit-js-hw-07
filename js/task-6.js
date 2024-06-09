const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');
createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", handleDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
    let innerHTML = "";
    let size = 30;

    for (let i = 0; i < amount; i++) {
        innerHTML += `<div style="
            width: ${size}px;
            height: ${size}px;
            background-color: ${getRandomHexColor()};">
        </div>`;
        size += 10;
    }
    boxesContainer.innerHTML = innerHTML;
}

function handleCreate() {
    const amount = parseInt(input.value);
    if (isNaN(amount) || amount < 1 || amount > 100) {
    return;
    }
    createBoxes(amount);
    input.value = "";
}

function handleDestroy() {
    boxesContainer.innerHTML = "";
}