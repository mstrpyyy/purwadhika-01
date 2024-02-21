// DATA STRUCTURE

// STACK >> last in first out | ex = PUSH and POP / undo

//-------------------------------------------------------------------------------------

// QUEUE >> first in fist out | ex = PUSH and SHIFT / email

//-------------------------------------------------------------------------------------
// SET >> remove duplicate
const fruits = ['banana', 'apple', 'banana', 'mango']
const newFruits = new Set(fruits)
console.log(newFruits);                                     // { 'banana', 'apple', 'mango' }
console.log("\n");

//forEach
fruits.forEach((item) => {
    console.log(item);
})

console.log("\n");




//-------------------------------------------------------------------------------------
// HASH TABLE / MAP
const myMap = new Map()
myMap.set("david", 1)
myMap.set("silva", '002')
myMap.set(1, '002')                     //advantage of Map is the ability to set (almost) anything as keys

console.log(myMap);

//LOOP
for (const value of myMap) {
    console.log(value);
}
for (const [key, value] of myMap) {
    console.log(`${key} <> ${value}`);
}
//destructuring the value

let newMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
  ]);
  numbers.forEach(function(element) {
    console.log(element);
  });

