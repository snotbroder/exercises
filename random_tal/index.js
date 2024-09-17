window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  randomNumber();
}

const text = document.querySelector("#text");

function randomNumber() {
  let rndm = ("Math", Math.ceil(Math.random() * (99 + 1)));
  text.textContent = rndm;
}
