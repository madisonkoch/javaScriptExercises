'use strict';

/*Part 1*/
    //const name = 'madison';
    //let happy = true;
    //let age = 24;
    //let hairColor= 'red';

    //const madisonArray = [name, happy, age, hairColor]

    /*this will return madisonArray as an object*/
    // console.log(typeof madisonArray, madisonArray)

    /*Check to make sure madisonArray is an array*/
        // console.log(Array.isArray(madisonArray), madisonArray) 
            /*returns 'true' when an array*/

    /*call out the first value of the array (i.e. name)*/
        // console.log(Array.isArray(madisonArray), madisonArray[0])

    /*for 2 and 3 dimensional arrays*/
        // const kochArray = [name, happy, age, hairColor, ['kids', 'dog',4]]
        // console.log(Array.isArray(kochArray), kochArray[4,0])


    //const madison = [name, happy, age, hairColor, ['kids', 'dog', 4]]

    /* Foreloops*/

    //for (let index = 0; index < madison.length; index++){
    //    console.log(madison[index]);
    //}
/*Part 2 - FORELOOPS continued*/
    const madison = {
        name: 'madison',
        age: 24,
        happy: true,
        hairColor: 'brown',
    };

    const chris ={
        name: 'chris',
        age: 27,
        happy: true,
        hairColor: 'brown',
    };

    const saundra = {
        name: 'saundra',
        age: 40,
        happy: false,
        hairColor: 'red',
    };

    const studentArray = [madison, chris, saundra];

    /*check yourself*/
    // console.log(studentArray)

    //for (let i = 0; i < studentArray.length; i++){
    //    console.log(studentArray[`${studentArray[i].name}`]);
    //}
        /* `${studentArray[i].name}`  <--- means to only show the name property of each student. */

    /*produce a string with name & age in it*/
        //for (let i = 0; i < studentArray.length; i++){
        //    console.log(`Hello,${studentArray[i].name}, are you really ${studentArray[i].age}?`);
        //}

    /*creat a string with an if dependency*/
        for (let i = 0; i < studentArray.length; i++){
            console.log(`Hello,${studentArray[i].name}, are you really ${studentArray[i].age}? Why are you so ${ studentArray[i].happy ? 'happy' : 'unhappy'}?`);
        }

    /* to check ${studentArray[i].age}? Why are you so ${ studentArray[i].happy ? 'happy' : 'unhappy'}*/
        /*Which means if true then 'happy' else...*/
        //if (madison.happy){
        //    return 'happy';}
        //else {
        //    return 'unhappy';
        //}

