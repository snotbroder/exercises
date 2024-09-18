"use strict";

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

const player = document.querySelector("#player1");
const aI = document.querySelector("#player2");
let players = document.querySelector(".player");

let userGuess = "";
let compGuess;

let result;

rockBtn.addEventListener("click", rockClick);
paperBtn.addEventListener("click", paperClick);
scissorsBtn.addEventListener("click", scissorClick);

// function knapKlik() {
//   rockBtn.removeEventListener("click", knapKlik);
//   paperBtn.removeEventListener("click", knapKlik);
//   scissorsBtn.removeEventListener("click", knapKlik);
//   console.log("knap trykket, fjernet eventlistener");

//   aI.classList.add("shake");
//   player.classList.add("shake");
// }

function rockClick() {
  rockBtn.removeEventListener("click", rockClick);
  paperBtn.removeEventListener("click", paperClick);
  scissorsBtn.removeEventListener("click", scissorClick);
  console.log("rock, fjernet eventlistener");

  aI.classList.add("shake");
  player.classList.add("shake");

  userGuess = "rock";
  console.log("userGuess =", userGuess);
  rmvAnim();
  computerGuess();
}

function paperClick() {
  rockBtn.removeEventListener("click", rockClick);
  paperBtn.removeEventListener("click", paperClick);
  scissorsBtn.removeEventListener("click", scissorClick);
  console.log("paper, fjernet eventlistener");

  aI.classList.add("shake");
  player.classList.add("shake");

  userGuess = "paper";
  console.log("userGuess =", userGuess);
  rmvAnim();
  computerGuess();
}

function scissorClick() {
  rockBtn.removeEventListener("click", rockClick);
  paperBtn.removeEventListener("click", paperClick);
  scissorsBtn.removeEventListener("click", scissorClick);
  console.log("scissor, fjernet eventlistener");

  aI.classList.add("shake");
  player.classList.add("shake");

  userGuess = "scissor";
  console.log("userGuess =", userGuess);
  rmvAnim();
  computerGuess();
}

function rmvAnim() {
  player.classList.remove("scissors");
  player.classList.remove("rock");
  player.classList.remove("paper");

  aI.classList.remove("scissors");
  aI.classList.remove("rock");
  aI.classList.remove("paper");
}

function computerGuess() {
  //   compGuess = "rock";

  const randomNum = Math.floor(Math.random() * 3);
  //   console.log(randomNum);
  if (randomNum === 0) {
    compGuess = "rock";
  }
  if (randomNum === 1) {
    compGuess = "scissor";
  }

  if (randomNum === 2) {
    compGuess = "paper";
  }

  console.log("compGuess = ", compGuess);
  determinWinner();
}

function determinWinner() {
  player.addEventListener("animationend", end);
  //user guess rock
  if (userGuess === "rock" && compGuess === "rock") {
    result = "draw";
    player.classList.add("rock");
    aI.classList.add("rock");
  }
  if (userGuess === "rock" && compGuess === "paper") {
    result = "computer";
    player.classList.add("rock");
    aI.classList.add("paper");
  }
  if (userGuess === "rock" && compGuess === "scissor") {
    result = "user";
    player.classList.add("rock");
    aI.classList.add("scissors");
  }

  // user guess paper
  if (userGuess === "paper" && compGuess === "rock") {
    result = "user";
    player.classList.add("paper");
    aI.classList.add("rock");
  }
  if (userGuess === "paper" && compGuess === "paper") {
    result = "draw";
    player.classList.add("paper");
    aI.classList.add("paper");
  }
  if (userGuess === "paper" && compGuess === "scissor") {
    result = "computer";
    player.classList.add("paper");
    aI.classList.add("scissors");
  }

  // user guess scissor
  if (userGuess === "scissor" && compGuess === "rock") {
    result = "computer";
    player.classList.add("scissors");
    aI.classList.add("rock");
  }
  if (userGuess === "scissor" && compGuess === "paper") {
    result = "user";
    player.classList.add("scissors");
    aI.classList.add("paper");
  }
  if (userGuess === "scissor" && compGuess === "scissor") {
    result = "draw";
    player.classList.add("scissors");
    aI.classList.add("scissors");
  }
  console.log("winner = ", result);

  function end() {
    aI.classList.remove("shake");
    player.classList.remove("shake");
    if (result === "user") {
      win.classList.remove("hidden");
    }
    if (result === "draw") {
      draw.classList.remove("hidden");
    }
    if (result === "computer") {
      lose.classList.remove("hidden");
    }
  }
  reset();
}

function reset() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorClick);

  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
}
