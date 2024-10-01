const btnStart = document.querySelector("#start");
const btnCorrect = document.querySelector("#correct");
const btnTooLow = document.querySelector("#tooLow");
const btnTooHigh = document.querySelector("#tooHigh");

const guessText = document.querySelector("#guessText");

let compGuess;

let min = 1;
let max = 100;
numberOfGuesses = 0;

function start() {
  compGuess = Math.floor((min + max) / 2);
  guessNumber();
}

function guessNumber() {
  guessText.textContent = compGuess;
  console.log(compGuess);
}

btnTooHigh.addEventListener("click", guessHigh);
btnTooLow.addEventListener("click", guessLow);
//btnCorrect.addEventListener("click", guessCorrect);

function guessHigh() {
  max = compGuess - 1;
  compGuess = Math.floor((min + max) / 2);

  console.log("compGuess = ", compGuess);

  guessNumber();
}

function guessLow() {
  min = compGuess + 1;
  compGuess = Math.floor((min + max) / 2);

  console.log("compGuess = ", compGuess);

  guessNumber();
}
