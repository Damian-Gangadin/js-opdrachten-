let bitcoin = [40604, 40648, 38275, 30386, 39445, 39121, 38494]

let sum = 0;

for (let i = 0; i < bitcoin.length; i++) {
    sum += bitcoin [i];
}

let average = sum / bitcoin.length  ;

console.log("the average is: ", average);

let highestNumber = bitcoin[0];

for (let i = 0; i < bitcoin.length; i++) {
    if (bitcoin[i] > highestNumber) {
        highestNumber = bitcoin[i];
    }
}

console.log("bitcoin peaked at: ", highestNumber);

let lowestNumber = bitcoin[0];

for (let i = 0; i < bitcoin.length; i++) {
    if (bitcoin[i] < lowestNumber) {
        lowestNumber = bitcoin[i];
    }
}

console.log("bitcoin was at it's lowest at:", lowestNumber);

//opdr 2
let  jobArray = [
    {work: "apotheker", beginsalaris: 3450},
    {work: "automaker", beginsalaris: 2000},
    {work: "bouwvakker", beginsalaris: 1650},
    {work: "electricien", beginsalaris: 2200},
    {work: "kinderopvang", beginsalaris: 1890},
    {work: "metselaar", beginsalaris: 2400},
    {work: "timmerman", beginsalaris: 2300}
]

let totalSalary = 0;
 
for (let i = 0; i < jobArray.length; i++) {
    totalSalary += jobArray[i] .beginsalaris
}
 
console.log("Salaris van alle beroepen", totalSalary)

let averageSalary = 0;
 
for (let i = 0; i < jobArray.length; i++) {
    averageSalary += jobArray [i] .beginsalaris
}
 
let theAverage = averageSalary / jobArray.length
 
console.log("Gemmidelde salaris is: ", theAverage)
 
 
let highestSalary = jobArray[0].beginsalaris;
 
 
for (let i = 1; i < jobArray.length; i++) {
    if (jobArray[i].beginsalaris > highestSalary) {
        highestSalary = jobArray[i].beginsalaris
    }
}
 
console.log("Hoogste salaris is: ", highestSalary)
 
let lowestSalary = jobArray[0].beginsalaris;
 
for (let i = 1; i < jobArray.length; i++) {
    if (jobArray[i].beginsalaris < lowestSalary) {
        lowestSalary = jobArray[i].beginsalaris;
    }
}
 
console.log("Laagste salaris is: ", lowestSalary)

//opdr 3
function validateInputs() {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    // Reset vorige validation styles
    usernameInput.classList.remove("invalid", "valid");
    emailInput.classList.remove("invalid", "valid");
    // Check username 
    if (usernameInput.value.length < 3) {
      usernameInput.classList.add("invalid");
    } else {
      usernameInput.classList.add("valid");
    }
    // Check if email is empty
    if (emailInput.value.trim() === "") {
      emailInput.classList.add("invalid");
    } else {
      emailInput.classList.add("valid");
    }
   }