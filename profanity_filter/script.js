//curseword object
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

//etablerer variabler
const btn = document.querySelector("#btn");
const dialog = document.querySelector("#dialog");
const closeDialog = document.querySelector("#closeDialog");
const paragraph = document.querySelector("#p");

let clickCount = 0;

//function der aktiveres når btn trykkes
function checkSFW(text) {
  //tjek om clickCount er lig med 1 eller mere
  if (clickCount === 1 || clickCount > 1) {
    console.log("trykket mere end 1 gang");
    btn.removeEventListener;
    //åbn dialog
    dialog.showModal();
  }
  //ellers, loop gennem object elementerne og ændre de respektive ord
  curseWords.forEach((badOrGood) => {
    //her kopierer jeg variablen text. jeg indsætter også en span med konkantinering som har klassen goodword
    text = text.replaceAll(badOrGood.bad, `<span class="goodword">${badOrGood.good}</span>`);
  });
  clickCount++;
  console.log("checkSFW");
  return text;
}

//kør function når btn er klikket. texten der skal ændres er paragraph
btn.addEventListener("click", () => {
  let text = paragraph.textContent;
  const SFWtext = checkSFW(text);
  paragraph.innerHTML = SFWtext;
});

//lukknap på dialog
closeDialog.addEventListener("click", () => {
  dialog.close();
});
