//Current date
let now = new Date()
let data = new Date(0)

console.log(now)
console.log(data)

//Set date
let data2 = new Date("2024-01-26")      //year month day

console.log(data2)

//Built-in method
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())

console.log(now.setDate(20))            //https://www.epochconverter.com/
console.log(now.toLocaleTimeString())