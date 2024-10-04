const str = "peter";

//erklærer en uppercase version af str variablen
const uppercase = str.toUpperCase();
let split = str.split(1, -1);

//let substr = str.substring(1, 0).toUpperCase;

console.log("------NEW LINE------");
console.log("full string:", str);

//peTer
console.log(`tredje bogstav uppercase: ${str.substring(0, 2)}${str[2].toUpperCase()}${str.substring(3, str[-1])}
`);

//PETER
console.log(`hele string uppercase: ${str.toUpperCase()}
`); // jeg kunne også bare bruge variablen uppercase som jeg erklærede tidligere i dokumentet

//PEtER
console.log(`tredje bogstav lowercase: ${uppercase.substring(0, 2)}${str[2].toLowerCase()}${uppercase.substring(3, str[-1])}
`);

//pETer
console.log(`bogstav 1 & 2 er uppercase: ${str.substring(0, 1)}${str[1].toUpperCase()}${str[2].toUpperCase()}${str.substring(3, str[-1])}
`);
