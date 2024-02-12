
console.log("<EX 1. TRIANGLE>");
//Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height
let count = 1
function triangle(number) {
    for (let i = 1; i <= number; i++) {
        let result = ""                             //to reset result to empty
        for (let j = 1; j <= i; j++) {
            result = result + count.toString()
            count++
        } console.log(result)
    }     
} 
triangle(4)



console.log("\n\n\n<EX 2. FIZZBUZZ>");
//Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz". n -> total looping
function FizzBuzz(n) {
    resultFizz = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultFizz += "FizzBuzz, "
        } else if (i % 3 === 0) {
            resultFizz += "Fizz, "
        } else if (i % 5 === 0) {
            resultFizz += "Buzz, "
        } else {
            resultFizz += `${i}, `
        } 
    } console.log(resultFizz.slice(0, resultFizz.length - 2));
}
FizzBuzz(15)



console.log("\n\n\n<EX 3. BMI>");
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”
function bmi(weight, height) {
    resultBMI = weight / (Math.pow(height, 2));
    console.log(resultBMI);
    if (resultBMI < 18.5) {
        return "less weight"
    } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
        return "ideal"
    } else if (resultBMI >= 25 && resultBMI <= 29.9) {
        return "overweight"
    } else if (resultBMI >= 30 && resultBMI <= 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    } 
} 
console.log(bmi(84.3, 1.78));



console.log("\n\n\n<EX 4. BMI>");
//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
let arr=[1,2,3,4,5,6,7,8,9,10]
function array(arr) {
    let arr2 = []
    for ( let i = 0; i <= arr.length-1; i++) {

        if (arr[i] % 2 === 0) {
            arr2.push(arr[i])   //arr2 = consist of arr[i] if condts were met
        } else {
            continue
        }
    }
    return arr2
}
console.log(array(arr));



console.log("\n\n\n<EX 5. SPLIT>");
//Write a function to split a string and convert it into an array of words
//Example : “Hello World” → [“Hello”, “World”]
function splitFunction(string) {
    return string.split(" ")
}
console.log(splitFunction("Hello World Arya Hanif"));