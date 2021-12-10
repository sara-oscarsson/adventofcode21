const fs = require('fs');

let inputBinary = fs.readFileSync('input.txt', 'utf8').trim();

let myArray = inputBinary.split('\n');

let countOne = 0;
let countZero = 0;
let arrGamma = [];
let arrEpsilon = [];
let gamma = '';
let epsilon = '';

//Check if current bit is a zero or one, keep count
function checkNumber(currentBinary) {
    if(currentBinary === 1) {
        countOne++
    } else {
        countZero++;
    }
}

//Save a bit in an array for a new combination
function createNewCombination() {
    if(countOne > countZero) {
        arrGamma.push(1);
        arrEpsilon.push(0);
    } else {
        arrGamma.push(0);
        arrEpsilon.push(1);
    }
    countOne = 0;
    countZero = 0;
}

//Looping through array with binary numbers
function loopMyArray(index) {
    for (let i = 0; i < myArray.length; i++) { 
        let currentBinary = Number(myArray[i].substr(index ,1));
        checkNumber(currentBinary);   
    }
    createNewCombination();

}

//Sending which index to loop through
function start() {
    for (let i = 0; i < 12; i++) {
        loopMyArray(i);
        
    }
  
    //Turning an array into a string
    arrGamma.forEach(binary => {
        gamma += binary;
    })

    arrEpsilon.forEach(binary => {
        epsilon += binary;
    })

    calculatePowerConsumtion(gamma, epsilon);
}

//Calculating power consumtion
function calculatePowerConsumtion(gamma, epsilon) {
    //Convert binary to decimal
    let powerConsumtion = parseInt(gamma, 2) * parseInt(epsilon, 2);
    console.log(`The power consumption of the submarine is ${powerConsumtion}`);
}

start();



