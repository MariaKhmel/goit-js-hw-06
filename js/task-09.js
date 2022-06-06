function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
bgColor : document.querySelector('.color'),
button: document.querySelector('.change-color'),
body : document.querySelector('body'),
}

refs.button.addEventListener('click', changeBgColor);

function changeBgColor (){
 return refs.body.style.backgroundColor = getRandomHexColor(), refs.bgColor.textContent = getRandomHexColor();
}