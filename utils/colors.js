import { getRandomNumber } from "./numbers.js";

function getRandomColor() {
  return `hsl(${getRandomNumber(300)}50% 50%)`;
}
