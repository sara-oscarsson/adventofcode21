let fs = require('fs');
let inputMovement = fs.readFileSync('./input.txt', 'utf8').trim();

let myArray = inputMovement.split('\n');
let ArrObj = [];

//For every input i create an object 
myArray.forEach(input => {
    //Creates an array with a the command first and then a number
    let newArr = input.split(' ');
    
    //Had to use split, toString and Number() to get it to work...
    let myObj = {
        command: newArr[0],
        speed: Number(newArr[1].split('', 1).toString())
    }
    
    ArrObj.push(myObj);
})

let positionH = 0;
let positionD = 0;

ArrObj.forEach(movement => {
    if(movement.command == 'forward') {
        positionH += movement.speed;
    }
    if(movement.command == 'down') {
        positionD += movement.speed;
    }
    if(movement.command == 'up') {
        positionD -= movement.speed;
    }
    
})
let answer = positionH * positionD;
console.log(`The answe to day2 part one is ${ answer }`);

/* Part two */

let horizontal = 0;
let depth = 0;
let aim = 0;

ArrObj.forEach(move => {
    if(move.command == 'down') {
        aim += move.speed;
    }
    if(move.command == 'up') {
        aim -= move.speed;
    }
    if(move.command == 'forward') {
        horizontal += move.speed;
        depth += move.speed * aim;
    }
})

let answer2 = horizontal * depth;
console.log(`The answer to day2 part two is ${ answer2 }`)