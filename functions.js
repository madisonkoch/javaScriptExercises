'use strict';

/*Overview: Functions*/
    /*to declare a function*/
        /*option 1 -- function declaration*/
            //function modulus/*<--name*/ (/*function parameters*/) {/*function body*/}
        /*option 2 -- function expression*/
            //const modulus2 /*<-- name*/ = function(/*parameters*/) {}
        /*The difference is that option 2 is "hoisted" to the top, so even if mudulus2 is in a line above the function expression it will still run*/

    /*to call the function*/
        //modulus (/*stuff*/);
        //modulus2(/*stuff*/)

/*Activity -- not sure what went on*/
        //const isEven = function(param){
           // const result = param % 2 === 0;
            //console.log(result);
           //return result;
        //};

        //const isItEven = isEven(10);

        //console.log(isItEven);

/*Activity2*/
    /*Sum*/
        //const adder = function(param1, param2){        
            //const result = param1 + param2;
            //return result;
        //}

        //const answer = adder(2,17)
        //console.log(answer);

    /*Difference*/
        //const difference = function(num1, num2) {
            //const result2 = num1 - num2;
            //return result2;
        //}

        //const answer2 = difference(2,17)
        //console.log(answer2)

/*Declaring an Object Literal*/
        //const mathTeacher = {
            //name: 'Josh',       /* key = name & value = Josh*/
            //adder : function (param1, param2){        
                //const result = param1 + param2;
                //return result;
            //},
        //};
        
        //console.log(mathTeacher.name);  /*the ".name" is unique to arrays - saying what is the value for the name key in the mathTeacher array*/
        //console.log(mathTeacher.adder(2, 17));

