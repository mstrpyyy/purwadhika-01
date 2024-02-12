for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += `${j} `;
    }
    console.log(row);
}


// console.log("---10. SORTING---");
// console.log("--using loop--");
// const numA = 42
// const numB = 27
// const numC = 18
// const abc = numA + numB + numC
// let order = ""
// for ( let o = 0; o < abc; o++) {
//     if (numA === o) {
//         order += `${o}, `
//         console.log(order.slice(0, order.length -2));
//     } else if (numB === o) {
//         order += `${o}, `
//         console.log(order.slice(0, order.length -2));
//     } else if (numC=== o) {
//         order += `${o}, `
//         console.log(order.slice(0, order.length -2));
//     } 
// }

console.log("---10. SORTING---");
console.log("--using loop--");
const numA = 42
const numB = 27
const numC = 18
const abc = numA + numB + numC
let order = ""
for ( let o = 0; o < abc; o++) {
    if (numA === o) {
        order += `${o}, `
    } else if (numB === o) {
        order += `${o}, `
    } else if (numC=== o) {
        order += `${o}, `
    }  
    console.log(order.slice(0, order.length -2));
}
