function criaColunasComLi() {
  let getUl = document.querySelectorAll('ul');
  for(let index = 0; index < getUl.length; index += 1) {
    for(let index2 = 0; index2 < getUl.length; index2 += 1) {
      let criaLi = document.createElement('li');
      criaLi.className = 'pixel';
      document.querySelectorAll('ul')[index].appendChild(criaLi);
    }
  }
  let getPixelBoard = document.getElementById('pixel-board');
}
criaColunasComLi();