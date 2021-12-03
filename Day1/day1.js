//Part One
const fs = require('fs');

//Read file with all the input and turn it into a string
const inputNumbers = fs.readFileSync('./input.txt').toString();
//Split the string and remove all spaces, return an array with numbers
const myArray = inputNumbers.split('\n').map(Number);


let previousInput = myArray[0];
let counter = 0;

//Loop through array and keep count of all increases 
for (let i = 0; i < myArray.length; i++) {
    if(myArray[i] > previousInput) {
        counter++;
    }
    //Keep track of the previous number to be able to compare with the next number
    previousInput = myArray[i];
    
}

console.log(`The answer to day one part one is: ${ counter }`);

//Part Two

let counter2 = 0;

for (let i = 0; i < myArray.length; i++) {
    let a = myArray[i] + myArray[i + 1] + myArray[i + 2];
    let b = myArray[i + 1] + myArray[i + 2] + myArray[i + 3];

    if(b > a) {
        counter2++;
    }
    
}

console.log(`The answer to day one part two is: ${ counter2 }`);
