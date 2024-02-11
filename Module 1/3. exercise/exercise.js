console.log("hello world");

//Write a code to display the multiplication table of a given integer.
console.log("---1. MULTIPICATOR---");
let Number = 9;
let Multiplicator = 10;

for (let i = 1; i <= Multiplicator; i++) {
   console.log(`${Number} x ${i} = ${Number * i}` )
}



//Write a code to check whether a string is a palindrome or not.
console.log("---2. PALINDROME---");
let string1 = "babi"
let reverse="";

for (let i = string1.length-1; i >= 0; i--) {
    reverse += string1.charAt(i)
}
if(reverse.toLowerCase()==string1.toLowerCase()){
    console.log("ini adalah palindrome");
} else {
    console.log("ini bukan palindrome");
}



//Write a code to convert centimeter to kilometer.
console.log("---3. CM TO KM---");
let centimeter = 100000
let kilometer = `${centimeter / 100000} km`
console.log(kilometer)



//Write a code to format number as currency (IDR)
console.log("---4. CURRENCY---");
console.log("--simple code--");
const toConvert = 1000
const tripleZero = "000"
let initialNumber = toConvert.toString()
let frontNumber = ""

let frontNumberLocator = initialNumber.lastIndexOf("000")
let backNumber = initialNumber.slice(frontNumberLocator)

for (let c = 0; c < frontNumberLocator; c++) {
    frontNumber += initialNumber.charAt(c)
}

console.log(`Rp.${frontNumber}.${backNumber},00`)

console.log("--flexible code--");
// const toConvert = 1000
// let initialNumber = toConvert.toString()
// let frontNumber = ""
// let frontNumberLocator = initialNumber.length - 3

// if (initialNumber.length > 3 && initialNumber.length <= 6) {
//     frontNumber = initialNumber.slice(0, frontNumberLocator)
//     backNumber = initialNumber.slice(frontNumberLocator)
//     console.log(`Rp.${frontNumber}.${backNumber},00`)
// }   
// else if (initialNumber.length > 6 && initialNumber.length <= 9) {
//     frontNumberLocator = initialNumber.length - 6
//     frontNumber = initialNumber.slice(0, frontNumberLocator)
//     midNumberLocator = initialNumber.length - 3
//     midNumber = initialNumber.slice(frontNumberLocator, midNumberLocator)
//     backNumber = initialNumber.slice(midNumberLocator)
//     console.log(`Rp.${frontNumber}.${midNumber}.${backNumber},00`)
// } 
// else if (initialNumber.length > 9 && initialNumber.length <= 12) {
//     frontNumberLocator = initialNumber.length - 9
//     frontNumber = initialNumber.slice(0, frontNumberLocator)
//     frontMidNumberLocator = initialNumber.length - 6
//     frontMidNumber = initialNumber.slice(frontNumberLocator, frontMidNumberLocator)  
//     backMidNumberLocator = initialNumber.length - 3
//     backMidNumber = initialNumber.slice(frontMidNumberLocator, backMidNumberLocator)
//     backNumber = initialNumber.slice(backMidNumberLocator)
//     console.log(`Rp.${frontNumber}.${frontMidNumber}.${backMidNumber}.${backNumber},00`)
// }
// else if (initialNumber.length > 12) {
//     console.log("exceeding maximum limit");
// }
// else {
//     console.log(`Rp.${initialNumber},00`)
// }




//Write a code to remove the first occurrence of a given “search string” from a string
console.log("---5. REMOVE SEARCH STRING---");
console.log("--simple code--");
const initialString = "Hello world"
const searchString = "ell"
let frontLocator = initialString.indexOf(searchString)
let front = initialString.slice(0, frontLocator)
let backLocator = frontLocator + searchString.length
let back = initialString.slice(backLocator)
console.log(front + back)

console.log("--flexible code--");
// const initialString = "Hello world"
// const searchString = "ell"
// const lSwap = ""
// let newString = "";

// if (searchString.length > 2) {
//     let frontLocator = initialString.indexOf(searchString)
//     front = initialString.slice(0, frontLocator)
//     let backLocator = frontLocator + searchString.length
//     back = initialString.slice(backLocator)
//     console.log(front + back)
// } else {
//     for ( let a = 0; a <= initialString.length; a++) {
//         let aLocator = initialString.charAt(a)
//     if (aLocator === searchString || aLocator === searchString.toUpperCase()) {
//         aLocator = lSwap
//         newString += aLocator
//     } else {
//         newString += aLocator
//         }
//     }
// console.log(newString)}



//Write a code to change every letter a into * from a string of input
console.log("---6. TITLE CASE---");
let lowerCase = "hello world"
let titleCase = lowerCase.charAt(0).toUpperCase()
let capLocator = ""
for (t = 0; t <= lowerCase.length; t++) {
    
    if (lowerCase.charAt(t) === " ") {
        capLocator = lowerCase.charAt(t+1)
        titleCase += capLocator.toUpperCase()
    } else {
        titleCase += lowerCase.charAt(t+1)
    }
}
console.log(titleCase);




//Write a code to reverse a string.
console.log("---7. REVERSE---");
let string2 = "hello"
let reverse2 = ""
for (let i = string2.length-1; i >= 0; i--) {
    reverse2 += string2.charAt(i)
}
console.log(reverse2);



//Write a code to swap the case of each character from string 
console.log("---8. CASE SWAP---");
let caseString1 = "The QuiCk BrOwN Fox"
let caseSwap = ""

for ( let k = 0; k <= caseString1.length; k++) {
    let charLocator = caseString1.charAt(k)

if (charLocator === charLocator.toUpperCase()) {
    caseSwap += charLocator.toLowerCase()
} else {
    caseSwap += charLocator.toUpperCase()
}
}

console.log(caseSwap)



//Write a code to find the largest of two given integers
console.log("---9. TITLE CASE---");
const num1 = 42
const num2 = 27

if (num1 > num2) {
    console.log(`${num1}`);
} else {
    console.log(`${num2}`);
}



//Write a conditional statement to sort three numbers
console.log("---10. SORTING---");
console.log("--using loop--");
const numA = 42
const numB = 27
const numC = 18
const abc = numA + numB + numC
let order = ""
for ( let o = 0; o < abc; o++) {
    if (numA === o) {
        order += `${o}, `
    } else if (numB === o) {
        order += `${o}, `
    } else if (numC=== o) {
        order += `${o}, `
    } 
}
console.log(order.slice(0, order.length -2));

console.log("--using if else--");
// const numA = 42
// const numB = 27
// const numC = 18
// const abc = numA + numB + numC
// let lowOrder = ""
// let midOrder = ""
// let highOrder = ""


// if (numA < numB && numA < numC) {
//     lowOrder = numA.toString()
// } else if (numB < numA && numB < numC) {
//     lowOrder = numB.toString()
// } else {
//     lowOrder = numC.toString()
// }

// if (numA > numB && numB > numC) {
//     midOrder = numB.toString()
// } else if (numC > numB && numB > numA) {
//     midOrder = numB.toString()
// } else if (numB > numC && numC > numA) {
//     midOrder = numC.toString()
// } else if (numA > numC && numC > numB) {
//     midOrder = numC.toString()
// } else {
//     midOrder = numA.toString()
// }

// if (numA > numB && numA > numC) {
//     highOrder = numA.toString()
// } else if (numB > numA && numB > numC) {
//     highOrder = numB.toString()
// } else {
//     highOrder = numC.toString()
// }

// console.log(`${lowOrder}, ${midOrder}, ${highOrder}`);




//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
console.log("---11. INPUT IDENTIFIER---");
let input = "ini string"
let identifier = (typeof input)
if (identifier == "number") {
    console.log("2")
} else if (identifier == "string") {
    console.log("1");
} else {
    console.log("3");
}


//Write a code to change every letter a into * from a string of input
console.log("---12. LETTER SWAP---");
let stringA = "An apple a day keeps the doctor away"
let replace = "a"
let replacer = "*"
let aSwap = ""

for ( let a = 0; a <= stringA.length; a++) {
    let aLocator = stringA.charAt(a)

if (aLocator === replace || aLocator === replace.toUpperCase()) {
    aSwap += replacer
} else {
    aSwap += aLocator
}
}

console.log(aSwap)