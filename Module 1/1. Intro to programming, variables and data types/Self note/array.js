//array
let arr = []


//add element to an array
arr[0] = "arya"
arr[1] = 2001
arr[2] = false
console.log(arr); // [ 'arya', 2001, false ]


//length property
console.log(arr.length); // 3


//last item in array
console.log(arr[arr.length - 1]);


//push (add) | pop (extract) 
arr.push("hanif")
console.log(arr); // [ 'arya', 2001, false, 'hanif' ]

let lastItem = arr.pop() // arr.pop() extract 'hanif'
console.log(lastItem); // hanif

console.log(arr); // [ 'arya', 2001, false ]


//unshift (add) | shift (extract)
arr.unshift(123)
console.log(arr)

let firstItem = arr.shift()
console.log(firstItem); // 123
console.log(arr); // [ 'arya', 2001, false ]


//delete
// delete arr[1] <- uncomment
console.log(arr); // [ 'arya', <1 empty item>, false ]


//splice
arr.splice(1, 1) // start from ..., remove ... amount,
console.log(arr); // [ 'arya', false ]

arr.splice(1, 0, 2001) // start from ..., remove ... amount, add ...
console.log(arr); //[ 'arya', 2001, false ]


//slice
newArr= arr.slice(1, 2) // remove everything before and after
console.log(newArr); // [ 2001]


//join
newString = arr.join()
console.log(newString); //arya,2001,false


//concat
newArr2 = [123,456,789]
let concatArray = arr.concat(newArr2)
console.log(concatArray); // [ 'arya', 2001, false, 123, 456, 789 ]


//spread
newArrNoSpread = [arr, newArr2]
console.log(newArrNoSpread); // [ [arr], [ 123, 456, 789 ] ]
newArrSpread = [...arr, ...newArr2]
console.log(newArrSpread); // [ 'arya', 2001, false, 123, 456, 789 ]

//sorting array
descending = newArr2.sort(function(a, b){return b-a});
ascending = newArr2.sort(function(a, b){return a-b});

console.log(descending)
console.log(ascending)

//map
let toAdd1 = [1,2,3]
let toAdd2 = [1,2,3]
function arrayaddition(toAdd1, toAdd2) {
    return toAdd1.map((item, index) => item + toAdd2[index])
}



//array destructing
let arr123 = [1,2,3]
let [a, b,c] = arr123
console.log(a);                         //1   