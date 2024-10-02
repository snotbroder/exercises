//Her deklarerer jeg objectet
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// functionen der bliver sat i gang når der klikkes på knappen #generate-breadcrumb
function generateBreadcrumb() {
  const breadcrumbContainer = document.getElementById("breadcrumb-container");

  // lav en unorderet list
  const ul = document.createElement("ul");

  //Loop gennem objectet og opret et list element

  bc.forEach((item, index) => {
    const li = document.createElement("li");

    //Hvis index nummeret er den sidste i objectet, så tildel kun navn
    if (index === bc.length - 1) {
      li.innerHTML = item.name;
    } else {
      //ellers opret et link og giv både navnet og linkeobjectet
      const a = document.createElement("a");
      a.href = item.link;
      a.innerHTML = item.name;
      //tilføj links på list elementet
      li.appendChild(a);
    }
    //tilføj list element på unordered list
    ul.appendChild(li);
  });

  // Først fjern eksisterende kode og indsæt ingenting, så tilføjet den nye unorderet list
  breadcrumbContainer.innerHTML = "";
  breadcrumbContainer.appendChild(ul);
}

// Her opretter jeg eventlistener på knappen
document.getElementById("generate-breadcrumb").addEventListener("click", generateBreadcrumb);
