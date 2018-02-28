"use strict";

const name = 'Madison';
let age = 24;
let isProgrammer = true;
let catName = null;


// Create custom string
//console.log(`${name} is ${age} years old and is a programmer.`)

//Create conditional statement
    //if isProgrammer is true...
        // if (isProgrammer === true) {
        //     console.log (`${name} is ${age} years old and is a programmer.`)
        // }else{
        //     console.log(`${name} does not have a cat.`)
        // }
    //if isProgrammer is NOT (!==) true...
        // if (isProgrammer !== true) {
        //     console.log (`${name} is ${age} years old and is a programmer.`)
        // }else{
        //     console.log(`${name} does not have a cat.`)
        // }
    //=== vs. == vs. =
        // === or !==  <--checks data type and value
        // == <-- checks value
            //ex. 3 ='3' this is number = string, but when run with == the string will be coerced into number.

    // if (isProgrammer === false) {
    //     console.log (`${name} is ${age} years old and is not a programmer.`)
    // }else if(age > 30) {
    //     conosole.log(`${name} is old`)
    // }else{
    //     console.log(`${name} does not have a cat.`)
    // }


//Activity
const type = 'dog';
let howOld = 5;
const numLegs = 4;
const tail = true;
const sound = 'bark';

if (howOld < 5){
    console.log(sound)
} else if (!tail){
    console.log(sound,sound)
    howOld++; //howOld = (howOld +1)
} else {
    console.log(`That darn ${type} can party!`)
}

//Notes continued
//document.write('hello world!');  <-- writes 'hello world' on the html page