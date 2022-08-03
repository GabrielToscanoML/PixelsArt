const getUl = document.querySelectorAll('ul');
function criaColunasComLi() {
  for (let index = 0; index < getUl.length; index += 1) {
    for (let index2 = 0; index2 < getUl.length; index2 += 1) {
      let criaLi = document.createElement('li');
      criaLi.style.backgroundColor = 'white';
      criaLi.className = 'pixel';
     // criaLi.textContent = index;
      document.querySelectorAll('ul')[index].appendChild(criaLi);
    }
  }
}
criaColunasComLi();


// adicionei a classe selected inicialmente na cor black
const blackColor = document.getElementById('black');
blackColor.classList.add('selected');

// cria a variavel que recebe a cor
let selectedColor = document.getElementById('currentColor');
selectedColor.style.backgroundColor = document.querySelector('.selected').id;

/*
  let getBlack = document.getElementById('black');
  getBlack = addEventListener('click', selectColor);

  let getColor2 = document.getElementById('red');
  getColor2 = addEventListener('click', selectColor);

  let getColor3 = document.getElementById('blue');
  getColor3 = addEventListener('click', selectColor);

  let getColor4 = document.querySelector('.green');
  getColor4 = addEventListener('click', selectColor);

function selectColor(color) {
  console.log(color);
  console.log(selectedColor);
  //selectedColor.style.backgroundColor;
 // console.log(selectedColor);
  
  let removeSelected = document.getElementsByClassName('selected');
  console.log(removeSelected);
  removeSelected[0].classList.remove('selected');

  color.classList.add('selected');
  selectedColor.style.backgroundColor = document.querySelector('.selected').id;
  console.log(color);
}
*/

function changeBackgrondColor(currentPixel) {
  currentPixel.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

function paintPixels() {
  let currentPixel = document.querySelectorAll('ul');
  currentPixel = addEventListener('click', changeBackgrondColor);
}
paintPixels();

