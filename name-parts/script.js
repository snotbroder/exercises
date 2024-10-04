function checkName() {
  const name = "Joris ten Voorde";

  //split string baseret på mellemrum
  let splitStr = name.split(" ");

  let firstName = splitStr[0];
  let middleName = splitStr[1];
  let lastName = splitStr[2];

  // hvis der ikker er indtastet noget i den tredje position i stringen, så sæt middleName og lastName til at være lig
  if (lastName === undefined) {
    console.log("no middleName");
    lastName = middleName;
    //log
    console.log("name =", name);
    console.log("splitStr = ", splitStr);
    console.log(`
    firstName: ${firstName}\n
    middleName: none\n
    lastName: ${lastName}`);
  } else {
    //hvis alle tre positioner er fyldt op
    console.log("name =", name);
    console.log("splitStr = ", splitStr);
    console.log(`
    firstName: ${firstName}\n
    middleName: ${middleName}\n
    lastName: ${lastName}`);
  }
}

//kør funktion
checkName();
