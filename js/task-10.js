function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumberEl: document.querySelector('input'),
  boxesEl: document.getElementById('boxes'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
}
  

refs.btnCreate.addEventListener('click', CreateBoxes);
refs.btnDestroy.addEventListener('click', DestroyBoxes);

function CreateBoxes() {
  
};

function DestroyBoxes() {
  
};
