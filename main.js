"use strict";
let user = document.querySelector('input[name="inpuT"]');
const buttoN = document.querySelector(".js-button");
let count = 0;
let max = getRandomNumber(100);
const p1 = document.querySelector(".js-paragraph1");
const p2 = document.querySelector(".js-paragraph2");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(max);

function handlerInput(event) {
  event.preventDefault();
  let value = parseInt(user.value);
  if (value < max) {
    p1.innerText = "Demasiado bajo";
  } else if (value > max) {
    p1.innerText = "Demasiado alto";
  } else if (value === max) {
    p1.innerText = "¡¡¡Has ganado campeona!!!";
  }
}

function countClick() {
  count += 1;
  p2.innerText = `Número de intentos: ${count}`;
}

buttoN.addEventListener("click", handlerInput);
buttoN.addEventListener("click", countClick);
