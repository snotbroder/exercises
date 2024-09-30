// import { $$, $ } from "../utils/dom.js";
let input = document.querySelector("#beloeb");
let moms = document.querySelector("#moms");
let result;

let inputAdd;
let momsAdd;

const subtotal = document.querySelector("h6 #subtotal");
const momsResult = document.querySelector("h6 #momssats");
const text = document.querySelector("h6 #resultat");
// Aflæs og omskriv type
function beregn(defaultMoms = 25) {
  console.clear();
  inputAdd = parseFloat(input.value, 10);
  //   momsAdd = parseInt(moms.value);

  momsAdd = parseFloat(moms.value) || defaultMoms;
  addMoms();
}

function addMoms() {
  result = inputAdd * (1 + momsAdd / 100);

  subtotal.textContent = inputAdd;
  moms.textContent = momsResult.textContent = result - inputAdd;
  text.textContent = result;
  console.log("input =", inputAdd);
  console.log("momssats =", momsAdd);
  console.log("resultat =", result);
}
