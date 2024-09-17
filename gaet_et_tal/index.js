window.addEventListener("load", sidenVises);
document.querySelector("#guessButton").addEventListener("click", knapKlik);
const input = document.querySelector("#input");
const text = document.querySelector("#text");
const result = document.querySelector("#result");
const guess = document.querySelector("#guess");
const body = document.querySelector("body");

let rndm;

function sidenVises() {
  console.log("sidenVises");
  randomNumber();
  text.style.opacity = 0;
  body.classList.remove("animation");
}

function randomNumber() {
  rndm = ("Math", Math.floor(Math.random() * (99 + 1)));
  // rndm = Math.floor(Math.random() * 100);
  text.textContent = rndm;
  console.log(rndm);
}

function knapKlik() {
  //parseInt oversætter fra string (vores input) til integer/tal (nu guessdNumber) som koden kan aflæse
  const guessedNumber = parseInt(input.value, 10);

  //en masse if else funktioner som filtrerer gennem udfaldende
  if (guessedNumber > rndm) {
    result.textContent = "Du har gættet for højt";
    error();
  } else {
    if (guessedNumber < rndm) {
      result.textContent = "Du har gættet for lavt";
      error();
    } else {
      //hvis inputtet/guessedNumber er lig med det random genererede tal, så tilføj animation og vis tallet
      if (guessedNumber == rndm) {
        result.textContent = "Du har gættet rigtigt";
        body.classList.add("animation");
        text.style.opacity = 1;
        input.setAttribute("disabled", "");
      } else {
        result.textContent = "indtast et nummer";
        error();
      }
    }
  }
}

const error = async () => {
  result.classList.add("error");
  await delay(500);
  result.classList.remove("error");
};
