console.log("---5. REMOVE SEARCH STRING---");
const initialString = "Hello world"
const searchString = "o"
const aSwap = ""
let newString = "";

if (searchString.length > 2) {
    let frontLocator = initialString.indexOf(searchString)
    front = initialString.slice(0, frontLocator)
    let backLocator = frontLocator + searchString.length
    back = initialString.slice(backLocator)
    console.log(front + back)
} else {
    for ( let a = 0; a <= initialString.length; a++) {
        let aLocator = initialString.charAt(a)
    if (aLocator === searchString || aLocator === searchString.toUpperCase()) {
        aLocator = aSwap
        newString += aLocator
    } else {
        newString += aLocator
        }
    }
console.log(newString)}