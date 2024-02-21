const myNumber = 42                                     //number
const myFloat = 42.06                                   //integer
const myFloat2 = 42.0                                   //integer
const myString = "42"                                   //string
const myString2 = "42.0123abcdef"                       //string

console.log(myNumber)
console.log(myNumber === myFloat)                       //false
console.log(myNumber === myFloat2)                      //true
console.log(myNumber === myString)                      //false

//different data type + number
console.log(myNumber + 1)                               //43
console.log(myFloat + 1)                                //43
console.log(myString+ 1)                                //421


//variable.toString()
console.log(typeof myFloat.toString())                  //string

//variable.toFixed() | limit floating number to the set value and convert to string data
console.log(myFloat.toFixed(1))                         //42.0123

//Number function
console.log(Number(myString) + 1)                       //43
console.log(Number(myString) === myNumber)              //true
console.log(Number("hello world"))                      //NaN

//Number.isInteger(variable)
console.log(Number.isInteger(myFloat))                  //false
console.log(Number.isInteger(myNumber))                 //true

//Number.parseFloat(variable) | remove non number and convert to number data
console.log(Number.parseFloat(myString2))               //42.0123

//Number.parseInt(variable) | remove floating number and convert to number data
console.log(Number.parseInt(myString2))                 //42.0123







