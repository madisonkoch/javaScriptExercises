'use strict';
/*use the output of function 1 in function 2*/
    const useful = 'string';

    function anotherFunction() {
        return 'words'
    }

    const usefulStuff = anotherFunction();

    const useCheck = function(sentence) {
        console.log(usefulStuff);
    }

    useCheck('something')


/*palindrom activity*/
    const palChecker = function(sentence){
        const input = sentence.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        const result = sentence.split('').reverse().join('').toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        console.log(input);
        console.log(result);
        console.log(input === result);
    };

    palChecker('wow');
    palChecker('was it a car or a cat i saw');
    palChecker('a man, a plan, a canal, panama!');
    palChecker('This is not a palindrome!')

