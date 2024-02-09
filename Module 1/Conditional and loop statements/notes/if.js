// IF and ELSE
let age = 17;
if (age >= 17) {
    console.log("You can drive a car!")
} else {
    console.log("You are to0 young")
}

//ELSE IF and CHAINING CONDITIONS
let score = 0;
let grade;
let test = "not yet";
if (score >= 90) {
    grade = "A";
    console.log(grade);
} else if (score >= 80) {
    grade = "B";
    console.log(grade);
} else if (score >= 70) {
    grade = "C"
    console.log(grade)
}else if (score >= 60) {
    grade = "C"
    console.log(grade)
}else{
    if (test === "done") {
        console.log("remedial")
    } else {
        console.log("susulan")
    }
}

//SWITCH CASE
const item = "chilli";
const expr = item;

switch (expr) {
    case "chilli":
        console.log("Rp1.500/g");
        break;
    case "apple":
    case "orange":
        console.log("Rp5.000/g");
        break;
    default:
        console.log("please input an item")
}

//LOGICAL OPERATORS ; && and ; || or ; ! not
const studentScore = 88;
let finalGrade;
let validation = "valid";
if (studentScore >=0 && validation === "invalid") {
    console.log("You cheated")
} else if (studentScore >= 90) {
    finalGrade = "A";
    console.log(finalGrade);
} else if (studentScore >= 80) {
    finalGrade = "B";
    console.log(finalGrade);
} else if (studentScore >= 70) {
    finalGrade = "C"
    console.log(finalGrade)
}else if (studentScore >= 60) {
    finalGrade = "C"
    console.log(finalGrade)
}else{
    if (test === "done") {
        console.log("remedial")
    } else {
        console.log("susulan")
    }
}

//TERNARY OPERATION
const str = "Arya Hanif";
// if (str === "Arya Hanif") {
//     console.log("Arya Hanif");
// } else {
//     console.log("Not Arya Hanif")
// }
///////use TERNARY
console.log(str === "Arya Hanif" ? "Benar" : "Salah");

