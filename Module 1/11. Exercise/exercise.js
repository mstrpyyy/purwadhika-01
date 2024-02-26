console.log("<EXCEL COLUMN TO NUMBER>");
// let column = "A"
// function convertColumn(column) {
//     let adder = 0
//     let res = 0
//     for ( let i = 0; i < column.length; i++ ) {
//     res += column.charCodeAt(i) - 64 + adder
//     adder += 25
//         } 
//     }
// console.log(convertColumn(column));

let column = "AAA"

function convertColumn(column) {
    let res = 0
    for ( let i = 0; i < column.length; i++) {
        res = column.charCodeAt(i) - 64 + res * 26
    } return res

}

console.log(convertColumn(column));



//---------------------------------------------------------------------------------------


console.log("\n\n<UNIQUE NUMBER>");
let arr = [4,1,2,1,2]
function difNum(arr) {
    arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
            return arr[i]
        }
    }
}
console.log(difNum(arr));


//---------------------------------------------------------------------------------------


console.log("\n\n<ANAGRAM>");
let s = "anaGram"
let t = "nagaram"

function anagram(s, t) {
    let arrS = s.toLowerCase().split("").sort().join("")
    let arrT = t.toLowerCase().split("").sort().join("")
    return arrS == arrT
}
console.log(anagram(s, t));


//---------------------------------------------------------------------------------------


console.log("\n\n<FIBONACI>");
console.log("using recursive:");
let n = 5
function climbing(n) {
    if (n == 1) {
        return 1
    } 
    if (n == 2) {
        return 2
    }
    return climbing(n-2) + climbing(n-1)
}
console.log(climbing(n));


console.log("using array:");
function climbingArr(n) {
    let fib = [1, 1]
    for (let i = 0; i < n; i++) {
        fib.push(fib[i] + fib[i+1])   
    } return fib[n]
}
console.log(climbingArr(8));


//---------------------------------------------------------------------------------------


console.log("\n\n<PHONE NUMBER>");
let input = "281654321"
function phoneNum(input) {
    return res = `(${input.slice(0,3)})-${input.slice(3,6)}-${input.slice(6)}`
}
console.log(phoneNum(input));




function lebihKeren(input) {
    let depan = ""
    let tengah = ""
    let belakang = ""
    let hasil = ""
    for (let i = 0; i < input.length/3; i++) {
            hasil = `(${depan += input.at(i)})-${tengah += input.at(i+3)}-${belakang += input.at(i+6)}`
    } return hasil
}
console.log(lebihKeren(input));
