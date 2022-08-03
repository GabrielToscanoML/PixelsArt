

/*
// adicionei a classe selected inicialmente na cor black
const blackColor = document.getElementById('black');
blackColor.classList.add('selected');
*/

let currentSelected = document.getElementsByClassName('selected');
console.log(currentSelected[0]);


// cria a variavel que recebe a cor
let selectedColor = document.getElementById('currentColor');
selectedColor.style.backgroundColor = document.querySelector('.selected').id;


  let getBlack = document.getElementById('black');
  getBlack.addEventListener('click', getCurrentColorBlack);

  let getColor2 = document.getElementById('red');
  getColor2.addEventListener('click', getCurrentColorRed);

  let getColor3 = document.getElementById('blue');
  getColor3.addEventListener('click', getCurrentColorBlue);

  let getColor4 = document.getElementById('green');
  getColor4.addEventListener('click', getCurrentColorGreen);

function getCurrentColorBlack() {
  currentSelected[0].classList.remove('selected');
  document.getElementById('black').classList.add('selected');
  console.log(document.getElementById('black'));
  selectedColor.style.backgroundColor = document.querySelector('.selected').id;
}

function getCurrentColorRed() {
  currentSelected[0].classList.remove('selected');
  document.getElementById('red').classList.add('selected');
  console.log(document.getElementById('red'));
  selectedColor.style.backgroundColor = document.querySelector('.selected').id;
}

function getCurrentColorBlue() {
  currentSelected[0].classList.remove('selected');
  document.getElementById('blue').classList.add('selected');
  console.log(document.getElementById('blue'));
  selectedColor.style.backgroundColor = document.querySelector('.selected').id;
}

function getCurrentColorGreen() {
  currentSelected[0].classList.remove('selected');
  document.getElementById('green').classList.add('selected');
  console.log(document.getElementById('green'));
  selectedColor.style.backgroundColor = document.querySelector('.selected').id;
}

function changeBackgrondColor(currentPixel) {
  currentPixel.target.style.backgroundColor = selectedColor.style.backgroundColor;
}
const getUl = document.querySelectorAll('ul');
function criaColunasComLi() {
  for (let index = 0; index < getUl.length; index += 1) {
    for (let index2 = 0; index2 < getUl.length; index2 += 1) {
      let criaLi = document.createElement('li');
      criaLi.addEventListener('click', changeBackgrondColor);
      criaLi.style.backgroundColor = 'white';
      criaLi.className = 'pixel';
      document.querySelectorAll('ul')[index].appendChild(criaLi);
    }
  }
}
criaColunasComLi();

