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

const settings = {
  filter: "all",
  sortBy: "name",
  sortDir: "asc",
};
function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  registerButtons();

  //loadJSON();

  displayList(allAnimals);
}

function registerButtons() {
  //Filtreringsknapper
  document.querySelectorAll('[data-action="filter"]').forEach((button) => button.addEventListener("click", selectFilter));

  //Sorteringsknapper
  document.querySelectorAll('[data-action="sort"]').forEach((button) => button.addEventListener("click", selectSort));
}

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log("Filtered for:", filter);
  setFilter(filter);
}

function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}

function filterList(filteredList) {
  // let filteredList = allAnimals;
  if (settings.filterBy === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }
  return filteredList;
}

function isCat(animal) {
  return animal.type === "cat";
}
function isDog(animal) {
  return animal.type === "dog";
}
//Select sort button
function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection; //bindestreg i dataattributter i html kan bruges som camelcase i js

  //find old sortBy element and remove class
  const oldElement = document.querySelector(`[data-sort='${settings.sortBy}']`);
  oldElement.classList.remove("sortby");

  //add selection indication underline
  event.target.classList.add("sortby");

  //toggle direction asc/desc
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log("Sorting by:", sortBy, sortDir);
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}

//Sorting system
function sortList(sortedList) {
  //let sortedList = allAnimals;
  let direction = 1;
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return sortedList;
}
function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);
  displayList(sortedList);
}

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
