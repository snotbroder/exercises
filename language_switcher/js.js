"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

window.onload = () => {
  console.log("Window loaded");
  const selectElement = document.querySelector(".sprog");

  selectElement.addEventListener("change", (event) => {
    console.log(`valgt: ${event.target.value}`);

    if (event.target.value === "Dansk") {
      console.log("Dom content: Dansk");
      texts.da.texts.forEach((entry) => {
        document.querySelector(entry.location).textContent = entry.text;
      });
    } else {
      console.log("Dom content: Tysk");
      texts.de.texts.forEach((entry) => {
        document.querySelector(entry.location).textContent = entry.text;
      });
    }
  });
};
const locale = "da";
