const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

const filterAll = document.querySelector("#all");
const btnElectric = document.querySelector("#electric");
const btnTwoOrMore = document.querySelector("#twoOrMore");

//All filter
function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
  filterAll.removeEventListener("click", () => showTheseVehicles(vehicles));
}
filterAll.addEventListener("click", function local() {
  showTheseVehicles(vehicles);
  filterAll.removeEventListener("click", local);
});

//Electric filter
function isElectric(vehicle) {
  return vehicle.isElectric === true;
}
function showElectric(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
    </tr>`;
  });
}
btnElectric.addEventListener("click", function local() {
  const onlyElectric = vehicles.filter(isElectric);
  showElectric(onlyElectric);
  btnElectric.removeEventListener("click", local);
});

//2 seats or more filter
function has2Seats(vehicle) {
  return vehicle.passengers >= 2;
}
function show2OrMore(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
    </tr>`;
  });
}
btnTwoOrMore.addEventListener("click", function local() {
  const twoOrMore = vehicles.filter(has2Seats);
  show2OrMore(twoOrMore);
  btnTwoOrMore.removeEventListener("click", local);
});
