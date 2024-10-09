"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [
  {
    name: "Mandu",
    desc: "amazing",
    type: "cat",
    age: 10,
  },
  {
    name: "Mia",
    desc: "black",
    type: "cat",
    age: 10,
  },
  {
    name: "Leeloo",
    desc: "growing",
    type: "dog",
    age: 3,
  },
  {
    name: "Toothless",
    desc: "trained",
    type: "dragon",
    age: 14,
  },
  {
    name: "ScoobyDoo",
    desc: "wondering",
    type: "dog",
    age: 58,
  },
  {
    name: "Horsey",
    desc: "horsing",
    type: "horse",
    age: 10,
  },
];

// The prototype for all animals:
// const Animal = {
//   name: "",
//   desc: "-unknown animal-",
//   type: "",
//   age: 0,
// };

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  //Filter buttons
  document.querySelector('[data-filter="cat"]').addEventListener("click", () => {
    const cats = allAnimals.filter((animal) => animal.type === "cat");
    console.log("Filtered for cats");
    displayList(cats);
  });
  document.querySelector('[data-filter="dog"]').addEventListener("click", () => {
    const dogs = allAnimals.filter((animal) => animal.type === "dog");
    console.log("Filtered for dogs");
    displayList(dogs);
  });
  document.querySelector('[data-filter="*"]').addEventListener("click", () => {
    console.log("Filtering by:", allAnimals);
    displayList(allAnimals);
  });

  displayList(allAnimals);

  //metoden som i videoen på sortering
  document.querySelectorAll('[data-action="sort"]').forEach((button) => button.addEventListener("click", selectSort));
  //loadJSON();
}

//Select sort button
function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  console.log("Sorting by:", sortBy);
  sortList(sortBy);
}

//Sorting system
function sortList(sortBy) {
  let sortedList = allAnimals;

  sortedList = sortedList.sort(sortByProperty);
  function sortByProperty(animalA, animalB) {
    if (animalA[sortBy] < animalB[sortBy]) {
      return -1;
    } else {
      return 1;
    }
  }
  displayList(sortedList);
}

// async function loadJSON() {
//   const response = await fetch("animals.json");
//   const jsonData = await response.json();

//   // when loaded, prepare data objects
//   prepareObjects(jsonData);
// }

// function prepareObjects(jsonData) {
//   allAnimals = jsonData.map(preapareObject);

//   // TODO: This might not be the function we want to call first
//   displayList(allAnimals);
// }

// function preapareObject(jsonObject) {
//   const animal = Object.create(Animal);

//   const texts = jsonObject.fullname.split(" ");
//   animal.name = texts[0];
//   animal.desc = texts[2];
//   animal.type = texts[3];
//   animal.age = jsonObject.age;

//   return animal;
// }

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
