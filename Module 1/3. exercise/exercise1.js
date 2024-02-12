console.log("---2. PALINDROME---");
let string1 = "madam"
let reverse="";

for (let i = string1.length-1; i >= 0; i--) {
    reverse += string1.charAt(i)
}
if(reverse.toLowerCase()==string1.toLowerCase()){
    console.log("ini adalah palindrome");
} else {
    console.log("ini bukan palindrome");
}

// function bolakbalik(string1, reverse) {
// for (let i = string1.length-1; i >= 0; i--) {
//     reverse += string1.charAt(i)
// }
// if(reverse.toLowerCase()==string1.toLowerCase()){
//     console.log("ini adalah palindrome");
// } else {
//     console.log("ini bukan palindrome");
// }
// }

// console.log(bolakbalik("madam"))