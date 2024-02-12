

// let result = ""
// let number = 5
// for (i = 1; i <=number; i++) {
//     result += `0${i} `
//     console.log(result)
// }    



let result = "";
let counter = 1;

function triangle(number) {

    for (let i = 1; i <= number; i++) {
        result = "";

        for (let j = 1; j <= i; j++) {

            result += `${counter.toString().padStart(2, '0')} `;
            counter++;
        }
        console.log(result);
    }
}

triangle(4);




// function triangle(number) {
//     let result = "";

//     for (let i = 1; i <=number; i++) {
//         result += `0${i} `;
//         console.log(result)
//     }    
// }
// triangle(5)