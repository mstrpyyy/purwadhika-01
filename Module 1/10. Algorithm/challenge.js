// let input1 = [2, 1, 4, 3, 5] // 1,2,3,4,5

// function zigzag(input1) {
//     input1.sort(function(a, b){return a-b})
//     let arr = []
//     if (input1.length % 2 === 0) {
//         for (let i = 0; i < input1.length / 2; i++) {
//             arr.push(input1[i])
//             arr.push(input1[input1.length - 1 - i])
//         } return arr
//     } else {
//         for (let i = 0; i < input1.length / 2; i++) {
//             arr.push(input1[i])
//             arr.push(input1[input1.length - 1 - i])
//         } return arr.slice(0, arr.length-1)
//     }
// }
// console.log(zigzag(input1));


let input1 = [2, 1, 4, 3, 5] 

function zigzag(input1) {
    input1.sort(function(a, b){return a-b})
    let arr = []
        for (let i = 0; i < Math.ceil(input1.length / 2); i++) {
            arr.push(input1[i])
            if ( i !== input1.length - 1 - i)
            arr.push(input1[input1.length - 1 - i])
        } return arr
    } 
console.log(zigzag(input1));


let input = "Pig latin is cool !"
let adder = "ay"

function addAy(input, adder) {
    let arr = input.split(" ").map(item => item.substring(1) + item.at(0) + adder)
    return arr.join(" ")
}
console.log(addAy(input, adder));




// sensor = ["anjing", "babi", "monyet"]
// string = "anjing lagi makan babi sama monyet monyet"
// function sensorfunc(string) {
//         string = string.replaceAll("monyet", "m****t")
//         string = string.replaceAll("anjing", "a****g")
//         string = string.replaceAll("babi", "b**i")
//         return string
// }
// console.log(sensorfunc(string));

let sensor = ["anjing", "babi", "monyet"]
let string = "anjing lagi makan babi sama monyet monyet"

function sensorArr(string, sensor) {
    sensorword = sensor.map(item => item.at(0) + "*".repeat(item.length-2) +item.at(item.length - 1) )
    for (let i = 0; i < sensor.length; i++) {
        string = string.replaceAll(sensor[i], sensorword[i])
    } return string
}
console.log(sensorArr(string, sensor));


function sensorArrNoLoop(string, sensor) {
    let res = []
    string.split(" ").map((item) => {
    if (sensor.includes(item)) {
        res.push(item.at(0) + "*".repeat(item.length-2) +item.at(item.length - 1))
        } else {
            res.push(item)
        }
    } ) 
    return res.join(" ")
    } 

console.log(sensorArrNoLoop(string, sensor));