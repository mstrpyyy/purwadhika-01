// console.log("hello world")

// //STRINGS
const myVariable = "hello world";

// //length prty [no ()]
console.log(myVariable.length)

// //character at | (use number)
console.log(myVariable.charAt(1)) 
console.log(myVariable[1]) 

//index of | oposite of charAt (use string)
console.log(myVariable.indexOf("o"))
console.log(myVariable.indexOf("orl"))

//last index of
console.log(myVariable.lastIndexOf("o"))
console.log(myVariable.lastIndexOf("orl"))

//uppercase & lowercase (empty)
console.log(myVariable.toUpperCase())
console.log(myVariable.toLowerCase())

//include (use string)
console.log(myVariable.includes("the"))
console.log(myVariable.includes("teh"))

//slice | remove string before and after (use number)
console.log(myVariable.slice(3))
console.log(myVariable.slice(3, 7))

//split | saperate string before and after "..." (use string)
console.log(myVariable.split("e"))
console.log(myVariable.split(""))
console.log("Arya, Hanif, Nugroho".split(", "))
console.log("Arya Hanif Nugroho".split(" "))