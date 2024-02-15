console.log("EX 1. LOWEST, HIGHEST, AVERAGE");
//Write a function to get the lowest, highest and average value in the array (with and without sort function).
console.log("<using sort>");
arr = [12,5,23,18,4,45,32]
function maxMinAvrg (arr) {
    arr.sort(function(a, b){return a-b}); 
    let lowest = arr[0];
    let highest = arr[arr.length-1];
    let average = 0;
    let total = 0;
    for (i = 0; i <= arr.length -1; i++) {
        total += arr[i]
        average = total / arr.length
    }
    return {lowest, highest, average }
}
console.log(maxMinAvrg(arr));

console.log("\n<using double if>");

function maxminaverage(arr) {
    let total = 0;
    let average = 0;
    let lowest = arr[0];
    let highest = arr[0];
    for (let i = 0; i < arr.length;i++){
        total += arr[i]
        average = total/arr.length
        if (lowest > arr[i]){ 
            lowest = arr[i]
        } 

        if (highest < arr[i]){
            highest = arr[i]
        }

    } return {lowest, highest, average }
}
console.log(maxminaverage(arr))



console.log("\n\n\nEX 2. LOWEST, HIGHEST, AVERAGE");
//Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
let fruit = ["apple", "banana", "cherry", "date"]
function fruitString(fruit) {
    result = fruit.slice(0, fruit.length-1)
    and = `,and ${fruit[fruit.length-1]}`
    return result + and
}
console.log(fruitString(fruit));



console.log("\n\n\nEX 3. SPLIT TO ARRAY");
//Write a function to split a string and convert it into an array of words
let word = "Hello World"
function splitString(word) {
    result = word.split(" ")
    return result
}
console.log(splitString(word));



console.log("\n\n\nEX 4. ADDITION OF 2 ARRAY");
//Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

console.log("<using map built in method>");
let toAdd1 = [1,2,3]
let toAdd2 = [1,2,3]
function arrayaddition(toAdd1, toAdd2) {
    return toAdd1.map((item, index) => item + toAdd2[index])
}
console.log(arrayaddition(toAdd1, toAdd2));

console.log("\n<using shift>");
let addResult = []
let addition = 0
let stopper = toAdd1.length-1
function arrayAddition(toAdd1, toAdd2) {
    for (i = 0; i <= stopper; i++) {              // 0 3 / 1 2 / 2 1 
        addition = toAdd1.shift() + toAdd2.shift()
        addResult.push(addition)
    } return addResult
}
console.log(arrayAddition(toAdd1, toAdd2) );

console.log("\n<using loop only>");
function ArrayAddition(toAdd1, toAdd2) {
    for (i = 0; i < toAdd1.length; i++) {
        addResult.push(toAdd1[i] + toAdd2[i])
    } return addResult
}
console.log(ArrayAddition(toAdd1, toAdd2));



console.log("\n\n\nEX 5. ADD ELEMENT IF NOT IN ARRAY");
// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
console.log("<using loop>");
let arr1 = [1,2,3,4]
let newElement = 4
function addElement(newElement) {
    for (i = 0; i <= arr1.length-1; i++) {
        if (newElement === arr1[i]) {
            return arr1
        } else if (i === arr1.length-1) {
            arr1.push(newElement)
            return arr1
        }
        }
    } 
console.log(addElement(newElement));

console.log("\n<using includes built in method>");
function addElement1(newElement) {
    if (arr1.includes(newElement) === false) {
        arr1.push(newElement)
    } 
    return arr1
} 
console.log(addElement1(newElement));


console.log("\n\n\nEX 6. EVEN NUMBER");
//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
let number = [1,2,3,4,5,6]
let resultEven = []

function findEven(number) {
    for (i = 0; i <= number.length -1; i++) {
        if (number[i] % 2 === 0) {
            resultEven.push(number[i])
        } 
    } return resultEven
}
console.log(findEven(number));



console.log("\n\n\nEX 7. MAX ARRAY OUTPUT");
//Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
console.log("<using ...integer>");  //rest parameter
let arrInteger = []
function array(maxSize, ...integer) {
    for (i = 0; i < maxSize; i++) {
        arrInteger.push(integer[i])
    } return arrInteger
}
let maxSize = 5
console.log(array(maxSize, 5, 10, 24, 3, 6, 7, 8));

console.log("\n<using string to number to array>");
let toInteger = "5, 10, 24, 3, 6, 7, 8"
let integer = toInteger.split(", ")
let arrinteger = []
function Array(maxSize, integer) {
    for (i = 0; i < maxSize; i++) {
        arrinteger.push(Number(integer[i]))
    } return arrInteger
}
console.log(Array(maxSize, integer));



console.log("\n\n\nEX 8. COMBINE 2 ARRAYS");
//Write a function that will combine 2 given array into one array
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3;

function combineArray(array1, array2) {
    array3 = array1.concat(array2)
    return array3
}
console.log(combineArray(array1, array2));



console.log("\n\n\nEX 9. FIND DUPLICATE");
//Write a function to find duplicate values in an array
let arrDuplicate = [1, 2, 2, 2,, 3, 3, 4, 5, 5]
let duplicateValue = []

function removeDuplicate(arrDuplicate) {
    for ( let i = 0; i <= arrDuplicate.length - 1; i++) {
        if (arrDuplicate[i] === arrDuplicate[i + 1] && duplicateValue.includes(arrDuplicate[i]) == false) {
            duplicateValue.push(arrDuplicate[i])
        }
    } return duplicateValue
}

console.log(removeDuplicate(arrDuplicate));



console.log("\n\n\nEX 10. FIND DIFFERENCE");
//Write a function to find the difference in 2 given array
let arrDifference1 = [1, 2, 3, 4, 5]
let arrDifference2 = [3, 4, 5, 6, 7,]
let differentValue = []

function difference(arrDifference1, arrDifference2) {
    let arrConcat = arrDifference1.concat(arrDifference2)
    arrConcat.sort(function(a, b){return a-b});                 //[1, 2, 3, 3, 4, 4, 5, 5, 6, 7]
    for (let i = 0; i <= arrConcat.length - 1; i++) {
        if (arrConcat[i] !== arrConcat[i+1] && arrConcat[i] !== arrConcat[i-1]) {
            differentValue.push(arrConcat[i])
        }
    } return differentValue
}
console.log(difference(arrDifference1, arrDifference2));



console.log("\n\n\nEX 11. RETURN PRIMITIVE DATA ONLY");
//Based on the array below write a function that will return primitive data types only.
let arrToPrimitive = [1, [], undefined, {}, "string", {}, []]
let primitive = []

console.log("<using loop only>");
function primitiveResult(arrToPrimitive) {
    for ( let i = 0; i < arrToPrimitive.length; i++) {
        if (typeof arrToPrimitive[i] !== "object") {
            primitive.push(arrToPrimitive[i])
        }
    } return primitive
}
console.log(primitiveResult(arrToPrimitive));

console.log("<\nusing loop only>");
function primitiveresult(arrToPrimitive) {
    return arrToPrimitive.filter((item) => typeof item != "object")
}
console.log(primitiveresult(arrToPrimitive));



console.log("\n\n\nEX 12. SECOND SMALLEST");
let arrNumber = [5, 3, 1, 7, 2, 6]

function secondsmallest(arrNumber) {
    arrNumber.sort(function(a, b){return a-b});
    return arrNumber[1]
}
console.log(secondsmallest(arrNumber));



console.log("\n\n\nEX 13. ADD NUMBER DATA ONLY");
let arrMixed = ["3", 1, "string", null, false, undefined, 2]
let resultNumber = 0
function addNumber(arrMixed) {
    for (let i = 0; i < arrMixed.length; i++) {
        if (typeof arrMixed[i] === "number") {
            resultNumber += arrMixed[i]
        }
    } return resultNumber
}
console.log(addNumber(arrMixed));



console.log("\n\n\nEX 14. SUM OF DULICATED VALUE");
let arrDupSum = [10, 20, 40, 10, 50, 30, 10, 60, 10];
let dupSum = 0

console.log("<specific code>");
function duplicateSum(arrDupSum) {
    for (let i = 0; i < arrDupSum.length; i++) {
        if ( arrDupSum[i] === arrDupSum[0])
        dupSum += arrDupSum[i]
    } return dupSum
}
console.log(duplicateSum(arrDupSum));

console.log("<\nflexible code>");
function duplicatesum(arrDupSum) {
    let res = []
    arrDupSum.sort((a, b) => a - b)
    for (let i = 0; i < arrDupSum.length; i++) {
        if (arrDupSum[i] === arrDupSum [i + 1] || arrDupSum[i] === arrDupSum [i - 1]) {
            res.push(arrDupSum[i])
        }
    } return res.reduce((a, b) => a + b)
}
console.log(duplicatesum(arrDupSum));


console.log("\n\n\nEX 15. ROCK PAPER SCISSOR");


function rps(player) {
    let playerAnswer = player.toLowerCase()
    let computer = Math.floor(Math.random() * 3 + 1);
    let computerAnswer = computer === 1 ? "rock" 
    : computer === 2 ? "paper" 
    : "scissor";
    if (playerAnswer === computerAnswer) {
        return "draw" 
    } else if (playerAnswer === "rock" && computerAnswer === "scissor") {
        return "player win"
    } else if (playerAnswer === "rock" && computerAnswer === "paper") {
        return "computer win" 
    } else if (playerAnswer === "paper" && computerAnswer === "rock") {
        return "player win"
    } else if (playerAnswer === "paper" && computerAnswer === "scissor") {
        return "computer win" 
    } else if (playerAnswer === "scissor" && computerAnswer === "paper") {
        return "player win"
    } else {
        return "computer win"
    } 
}
let player = ""
console.log(rps("paper"));
