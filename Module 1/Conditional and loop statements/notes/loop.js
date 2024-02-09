//FOR LOOP ; count till it reaches its target
console.log("---FOR LOOP---")

for (let i = 1; i <=5; i++) {
    console.log("Count: " + i)
}
//Result
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5


//WHILE LOOP ; if conditions that are repeated. As long as the condition is true, the loop will continue.
console.log("---WHILE LOOP---")

let j = 0;
while (j < 3) {
    console.log("Hello!" + j)
    j++;
}
//result
// Hello!0
// Hello!1
// Hello!2


//DO LOOP ; only starts checking the condition after the first code block execution.
console.log("---DO LOOP---")

let k = 5;
do {
    console.log("Heho" + k)
    k++;
} while (k < 3)
//result
//Heho5


//BREAK
console.log("---BREAK---")

let sum = 0;
while (true) {
    let value = 4;
    if (sum >=19) break;
    sum += value;
}
console.log("Sum: " + sum)
//result
//Sum: 20


//CONTINUE
console.log("---CONTINUE---")
for (let z = 0; z <= 4; z++) {
    if (z === 3) continue;
    console.log(z)
}
//result
// 0
// 1
// 2
// 4