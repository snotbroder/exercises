const list = document.querySelector("ul");
const valueArr = [];
setInterval(generateBars, 1000);

function generateBars() {
  const rndm = Math.floor(Math.random() * 100);

  valueArr.push(rndm);
  console.log("valueArr", valueArr);
  const li = document.createElement("li");
  li.style.setProperty("--height", rndm);
  list.appendChild(li);

  if (valueArr.length > 19) {
    valueArr.shift(0);

    list.firstElementChild.remove();
  }
}
