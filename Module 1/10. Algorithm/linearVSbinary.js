//LINEAR
function search(arr, x) {
    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
        return i;
        }
    } return -1;    
}


let resultLinear = search([2,20,10,3], 20);
console.log(`linear search: ${resultLinear}`);


//BINARY
let arr = [2,3,4,10,40]
let x = 10

function findMean(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r-1)/2)
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) return findMean(arr, l, mid - 1, x)
        return findMean(arr, mid + 1, r, x);
    } return -1;
}
console.log(`find mean with binary search: ${findMean(arr, 0, arr.length-1, x)}`);


//BUBBLE SORT
function bubbleSort(arr ){
    for(let i = 0; i < arr. length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            };
        };
    }
    return arr;
}
console. log(`bubble sort: ${bubbleSort([5,3,8,4,6])}`);



//SELECTION SORT
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        //index of the smallest element to be the ith element.
        min = i;
        //Check through the rest of the array for a lesser element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        //compare the indexes and swap
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
    console. log(`Selection sort: ${selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36])}`);
    
  