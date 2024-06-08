function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById(`controls`);
const input = document.querySelector(`input`);
const createBtn = controls.querySelector(`[data-create]`);
const destroyBtn = controls.querySelector(`[data-destroy]`);
const boxesContainer = document.getElementById(`boxes`);
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i<amount; i++) {
    const div = document.createElement(`div`);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size +=10;
  }
boxesContainer.innerHTML = ``;
boxesContainer.appendChild(fragment);}
 function destroyBoxes() {
  boxesContainer.innerHTML = ``;
 }
createBtn/addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100){
    createBoxes(amount);
    input.value = ``;
  }
});
destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();

})