function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input[type="number"]`);
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// adding new boxes function by creating whole new fragment of document in memory 
function createBoxes(amount) {
    const dFrag = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement(`div`);
        div.style.width = `${size}`;
        div.style.height = `${size}`;
        div.style.background = getRandomHexColor();
        dFrag.appendChild(div);
        size += 10;
    }
    // clearing content by insert empty space in code
    boxesContainer.innerHtml = ``;
    boxesContainer.appendChild(dFrag);
}
    
function destroyBoxes() {
        boxesContainer.innerHTML = ``;
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

