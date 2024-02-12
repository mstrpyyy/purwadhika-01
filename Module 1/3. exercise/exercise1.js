console.log("hello world");

//Write a code to display the multiplication table of a given integer.
console.log("---1. MULTIPICATOR---");
function kali(Number, Multiplicator) {

    for (let i = 1; i <= Multiplicator; i++) {
    console.log(`${Number} x ${i} = ${Number * i}` )
    }
}

console.log(kali(9, 10));