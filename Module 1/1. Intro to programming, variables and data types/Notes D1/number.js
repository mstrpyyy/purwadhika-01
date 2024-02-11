//Built-in Method
const count = 123

console.log(typeof count)
console.log(typeof count.toString())
console.log(String(count))
console.log(typeof String(count))

console.log(count.toExponential(2))

const num = 5.6126
console.log(num.toFixed())
console.log(num.toFixed(3))
console.log(num.toFixed(2))
console.log(num.toFixed(7))
console.log(num.toPrecision(4))     //from the first number

const num2 = 0.00261738
console.log(num2.toFixed(3))
console.log(num2.toFixed(2))
console.log(num2.toPrecision(2))    //2 numbers after 0

const data= "123"
console.log(Number(data))
console.log(typeof Number(data))

const Data= "Budi"                  //Make sure data is a number
console.log(Number(Data))
console.log(typeof Number(Data))


//Basic Operators
console. log("1" + 2);
console. log(2 + "1");
console. log(1 + 1 + "1");
console. log("1" + 1 + 1);


//Modify in place
let n = 3
n += 10
n *= 2

console.log(n)

//Increment & decrement
let counter = 7
counter++
counter--

console.log(counter)

//postfix & prefix
let preCounter = 0
console.log(++preCounter)

let postCounter = 0
console.log(postCounter++)      //Adition calculated but not displayed
console.log(postCounter++)      //Previous calculation are displayed
console.log(postCounter++)