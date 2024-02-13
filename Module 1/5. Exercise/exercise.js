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

console.log("\n<using sort>");

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



console.log("\n\n\nEX 5. ADD ELEMENT IF");
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



console.log("\n\n\nEX 7. EVEN NUMBER");
