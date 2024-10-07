const domContent = document.querySelector("body");
const selectElement = document.querySelector(".themeSelector");

document.addEventListener("DOMContentLoaded", init);

function init() {
  selectElement.addEventListener("change", (event) => {
    console.log(`chosen: ${event.target.value}`);

    if (event.target.value === "light") {
      console.log();
      domContent.dataset.theme = "light";
    }
    if (event.target.value === "dark") {
      domContent.dataset.theme = "dark";
    }
    if (event.target.value === "hawaii") {
      domContent.dataset.theme = "hawaii";
    }
  });
}
