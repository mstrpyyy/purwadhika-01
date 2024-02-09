//Built-in method
let word = "purwadhika"
console.log(word)
console.log(word.toUpperCase())
console.log(word.toUpperCase().concat("BANDUNG"))

let wordCapital = word.toUpperCase()
console.log(wordCapital)
console.log(wordCapital.concat(word))

//Merging
let name = "Arya"

let message = "Hello " + name
let message2 = "Hello " .concat(name.toUpperCase())
let message3 = `Hello ${name}`
let message4 = `Hello "${name.toUpperCase()}"`

console.log(message)
console.log(message2)
console.log(message3)
console.log(message4)
console.log(message, message2, message3, message4)
