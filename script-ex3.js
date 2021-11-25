// E1 Write a function that takes in one parameter and logs that parameter 3 times into the console.

let functionName = (a) =>{
    let newline = ``;
    for (let i =0; i <3; i++){
        newline += a + `\n`;
    }
    return newline
}

let finishOfFirst = functionName(`hi all`);
console.log(finishOfFirst);

// E2 Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

function animal2 (parameter){
    parameter = parameter.toString();
    console.log(parameter);
    return parameter.repeat(5);
}

let output5 = animal2("5");
console.log(output5);

// E3 Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs 3 and "Woah" it should return WoahWoahWoah

function plot (n,str){
    let arrString = [];

    for (i = 0; i < n; i ++){
        arrString.push(str)
    }
    // let newString = arrString.join("")   to put in a string  
    // return newString;
    return arrString
}
    console.log(plot(3,'wuha'));

function parameterTwo(number, string) {
    return string.repeat(number);
    }
    
    console.log(parameterTwo(4, "Fubar")) 
    
// E4 Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input [1,6,83,91,0,-4,1337,5] it should return 1337
let nasim=2000;
let largestNumber = (array) => {
    let max=0;
    for (let i=0; i<array.length; i++){
        if(array[i] > max) {
            max=array[i];
        }
    }
    return max;
}
console.log(largestNumber([1,6,83,91,0,-4,1337,nasim,5]));


// E5 5. This question has 2 parts

// Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

// - printIfDivisibleByTen(1) --> no output
// - printIfDivisibleByTen(2) --> no output
// - printIfDivisibleByTen(32) --> no output
// - printIfDivisibleByTen(10) --> "Even 10!" into the console
// - printIfDivisibleByTen(30) --> "Even 10!" into the console
// - printIfDivisibleByTen(90000) --> "Even 10!" into the console

// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number. 

function printIfDivisibleByTen(n) {
    if (n % 10 === 0 && n !== 0) {
    console.log('Even 10!')
    }
    }
    
    for (let i = 0; i < 125; i++) {
    printIfDivisibleByTen(i)
    } 

// E7 Write an arrow function that takes in one parameter and returns true if that parameter is a string.

let x= string => {
    if (typeof string === `string`){
        return true
    }else{
        return false
    }
}

console.log(x(4));
console.log(x('nasim'));

// E8 Write an arrow function that takes in two parameters and returns true if both of them are strings.

let string8 = (testCase1, testCase2) => (typeof testCase1 == 'string' && typeof testCase2 =='string')

console.log(string8(3,3));  

// E9 Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:

// getFirstWord("Internetting is hard") --> "Internetting"
// getFirstWord("Hello World") --> "Hello"
// getFirstWord("Hello") --> "Hello"

const getFirstWord = str => {
    let newArr = str.split(' '); 
    console.log(newArr);
    let firstWord = newArr[0];
    return firstWord;
}

console.log(getFirstWord('hello world'));

// E10 HARD Write an arrow function that takes in one string. The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:

// wordRepeater("bunny") --> "bunny"
// wordRepeater("Cat food") --> "Cat Cat food food"
// wordRepeater("I am groot") --> "I I I am am am groot groot groot"
// wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"

const wordRepeater = (str) => {
    let array = str.split(' ');
    let check = '';
    for ( let i=0; i<array.length; i++){
    check += (array[i]+" ").repeat(array.length);
    
    }
    return check;
    }
    console.log(wordRepeater('mom here')); 

    // other solution from ruslan

    let ten = (h) => {
        let emptyTen = ` `
        let count = h.split(` `).length;
        for (i = 0; i < count; i++) {
        emptyTen += h.split(` `)[i].repeat(count) + ` `;
        
        }
        return emptyTen
        }
        let finishTen = ten("Cat food")
        console.log(finishTen); 


        // E11 Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:

        // firstLetter("cat") --> "c"
        // irstLetter("quylthulg") --> "q"

        const r = (str) => str.charAt(13)
        console.log(r('dbsjfdlmskdn fodnfbd jbfdfhrdb'));

        // E12 Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:

        // firstLetters("cat") --> "c"
        // firstLetters("What the fruit") --> "Wtf"
        // firstLetters("MongoDB Express Node React") --> "MERN"
        // firstLetters("What You See Is What You Get") --> "WYSIWYG"


        const firstLetterOfAllWord = str => {
            let newArray = str.split(' ');
            let newStr = ''

            for (let i=0; i<newArray.length; i++){
                newStr += newArray[i].charAt(0)
            }

            return newStr
        }

        console.log(firstLetterOfAllWord('who am i ?'));



        // E14 Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:

        // explode(41) --> null
        // explode("") --> []
        // explode("R & D") --> ["R", " ", "&", " ", "D"]
        // explode("Cat") --> ["C", "a", "t"]

        const reverseEngineering2 = string => `Cat` + (string.slice(2));
        console.log(reverseEngineering2(""))