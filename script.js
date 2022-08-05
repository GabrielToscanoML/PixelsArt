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

// criando evento para cada cor na paleta de cores
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

// funcao para alterar a cor de fundo de cada pixel
function changeBackgrondColor(currentPixel) {
  const currentP = currentPixel;
  currentP.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

// criacao do quadro

function criaPixelsInicial() {
  for (let index = 0; index < 25; index += 1) {
    document.documentElement.style.setProperty('--boardSizeRows', 5);
    document.documentElement.style.setProperty('--boardSizeColumns', 5);
    const criaDiv = document.createElement('div');
    criaDiv.addEventListener('click', changeBackgrondColor);
    criaDiv.style.backgroundColor = 'white';
    criaDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(criaDiv);
  }
}

criaPixelsInicial();

function deletePixels(num) {
  for (let index = 0; index < num * num; index += 1) {
    const deleteDiv = document.querySelector('.pixel');
    deleteDiv.remove();
    console.log(document.getElementById('pixel-board'));
  }
}

const getPixelBoard = document.getElementById('pixel-board');

function criaPixels(num) {
  deletePixels(num);
  document.documentElement.style.setProperty('--boardSizeRows', num);
  document.documentElement.style.setProperty('--boardSizeColumns', num);
  for (let index = 0; index < num * num; index += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.addEventListener('click', changeBackgrondColor);
    criaDiv.style.backgroundColor = 'white';
    criaDiv.className = 'pixel';
    document.getElementById('pixel-board').appendChild(criaDiv);
  }
}

let num = 5;

const btnGenerateBoard = document.getElementById('generate-board');
btnGenerateBoard.addEventListener('click', () => {
  let getTextValue = document.getElementById('board-size').value;
  num = getTextValue;
  if(getTextValue === '') {
    window.alert('Board Inválido!');
    return;
  }
  if (getTextValue > 4 && getTextValue < 51) { 
    criaPixels(getTextValue);
    return;
  }
  if (getTextValue > 50) {
    getTextValue = 50;
    criaPixels(getTextValue);
    return;
  }
  if (getTextValue < 5 && getTextValue > 0) {
    getTextValue = 5;
    criaPixels(getTextValue);
    return;
  }
});

const btnClear = document.getElementById('clear-board');
btnClear.textContent = 'Limpar';
btnClear.addEventListener('click', limpaQuadros);

function limpaQuadros() {
  for (let index = 0; index < (num * num); index += 1) {
      const getAllPixels = document.getElementsByClassName('pixel');
      getAllPixels[index].style.backgroundColor = 'white';
  }
}
