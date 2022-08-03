// adicionei a classe selected inicialmente na cor black
const blackColor = document.getElementById('black');
blackColor.classList.add('selected');

const currentSelected = document.getElementsByClassName('selected');

// cria a variavel que recebe a cor
const selectedColor = document.getElementById('currentColor');
selectedColor.style.backgroundColor = document.querySelector('.selected').id;

const getBlack = document.getElementById('black');
getBlack.addEventListener('click', function(e) {
  getCurrentColor('black');
});

const getColor2 = document.getElementById('red');
getColor2.addEventListener('click', function(e) {
  getCurrentColor('red');
});

const getColor3 = document.getElementById('blue');
getColor3.addEventListener('click', function(e) {
  getCurrentColor('blue');
});

const getColor4 = document.getElementById('green');
getColor4.addEventListener('click', function(e) {
  getCurrentColor('green');
});

function getCurrentColor(identify) {
  currentSelected[0].classList.remove('selected');
  document.getElementById(identify).classList.add('selected');
  selectedColor.style.backgroundColor = document.querySelector('.selected').id;
}

function changeBackgrondColor(currentPixel) {
  currentPixel.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

const getUl = document.querySelectorAll('ul');
function criaColunasComLi() {
  for (let index = 0; index < getUl.length; index += 1) {
    for (let index2 = 0; index2 < getUl.length; index2 += 1) {
      const criaLi = document.createElement('li');
      criaLi.addEventListener('click', changeBackgrondColor);
      criaLi.style.backgroundColor = 'white';
      criaLi.className = 'pixel';
      document.querySelectorAll('ul')[index].appendChild(criaLi);
    }
  }
}
criaColunasComLi();
