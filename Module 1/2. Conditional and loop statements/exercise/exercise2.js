//Write a code to convert celsius to fahrenheit
let celcius = 60;
let fahrenheit = ((celcius * 1.8) +32)
console.log("Fahrenheit: " + fahrenheit)

//Write a code to check whether the number is odd or even
let number = 22
console.log(number % 2 === 0 ? `${number} is even` : `${number} is odd`)

//Write a code to check whether the number is prime number or not
let num = 10
let isPrime;
for (i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = "non prime";
    } else {
        isPrime = "prime";
    }
}
console.log(`${num} is ${isPrime}`)

let Num = 7
let divider = 0
for (let i = 0; i <= Num; i++)
    if (Num % i === 0) {
        divider++;
    }
console.log(divider === 2 ? `${Num} is prime` : `${Num} is not prime`)

 
//Write a code to find the sum of the numbers 1 to N
let N = 5
let jumlah = 0
rumus = ""
for (i=1; i <= N; i++) {
    jumlah += i;
    if (i === 1) {
        rumus += `${i}`
    } else {
        rumus += ` + ${i}`
    }
}
console.log(`${rumus} = ${jumlah}`)

//Write a code to find factorial of a number
let F = 6
let faktorial = 1
for (i=1; i<=F; i++) {
    faktorial *= i
}
console.log(faktorial)

//Write a code to print the first N fibonacci numbers
// let fib = [0, 1];
// let Num = 15
// for (let i = 2; i <= Num; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
// }
// console.log(fib[Num])

let a = 0;
let b = 1;
let position = 10
for (let i = 1; i <= position; i++) {
    const next = a + b;
    b = a;
    a = next;
}
console.log(b)