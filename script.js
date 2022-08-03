const boardSize = 5;

// adicionei a classe selected inicialmente na cor black
const blackColor = document.getElementById('black');
blackColor.classList.add('selected');

const currentSelected = document.getElementsByClassName('selected');

// cria a variavel que recebe a cor
const selectedColor = document.getElementById('currentColor');
selectedColor.style.backgroundColor = document.querySelector('.selected').id;

function getCurrentColor(identify) {
  currentSelected[0].classList.remove('selected');
  document.getElementById(identify).classList.add('selected');
  selectedColor.style.backgroundColor = document.querySelector('.selected').id;
}

const getBlack = document.getElementById('black');
getBlack.addEventListener('click', () => {
  getCurrentColor('black');
});

const getColor2 = document.getElementById('red');
getColor2.addEventListener('click', () => {
  getCurrentColor('red');
});

const getColor3 = document.getElementById('blue');
getColor3.addEventListener('click', () => {
  getCurrentColor('blue');
});

const getColor4 = document.getElementById('green');
getColor4.addEventListener('click', () => {
  getCurrentColor('green');
});

function changeBackgrondColor(currentPixel) {
  const currentP = currentPixel;
  currentP.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

function criaPixels(num) {
  for (let index = 0; index < num * num; index += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.addEventListener('click', changeBackgrondColor);
    criaDiv.style.backgroundColor = 'white';
    criaDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(criaDiv);
  }
}

criaPixels(boardSize);

function limpaQuadros() {
  for (let index = 0; index < (boardSize * boardSize); index += 1) {
    const getAllPixels = document.getElementsByClassName('pixel');
    getAllPixels[index].style.backgroundColor = 'white';
  }
}

const btnClear = document.getElementById('clear-board');
btnClear.textContent = 'Limpar';
btnClear.addEventListener('click', limpaQuadros);
