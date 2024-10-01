const btnStart = document.querySelector("#start");
const btnCorrect = document.querySelector("#correct");
const btnTooLow = document.querySelector("#tooLow");
const btnTooHigh = document.querySelector("#tooHigh");

const guessText = document.querySelector("#guessText");

let compGuess = [""];

function start() {
  guessNumber();
}

function guessNumber() {
  compGuess = 50;

  guessText.textContent = compGuess;
  console.log(compGuess);

  //   return compGuess;
}

function guessHigh() {
  compGuess = Math.floor(compGuess / 1.3);
  console.log(compGuess);
  guessText.textContent = compGuess;
}

function guessLow() {
  compGuess = Math.floor(compGuess * 1.3);
  console.log(compGuess);
  guessText.textContent = compGuess;
}
