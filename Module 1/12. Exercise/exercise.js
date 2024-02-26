console.log("<MAJORITY ELEMENT>");
//Max number = 2
let nums = [3,2,3]

function majority(nums) {
    nums.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] == nums[i+1] || nums[i] == nums[i-1]) {
            count++
        } if (count > nums.length/2) {
            return nums[i]
        }
    }
} console.log(majority(nums))

console.log("\n\n<MAJORITY ELEMENT>");
//number > 2
let nums1 = [2,2,1,2,3,5,5,5,5]

function majority1(nums1) {
    let nums1Set = new Set(nums1);
    nums1.sort((a, b) => a - b);
    let count = 0; 
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === nums1[i + 1]) {
            count++;
        } else {
            count  = 1
        }
        if (count > nums1.length / nums1Set.size) {
            return nums1[i];
        } 
    }
} console.log(majority1(nums1));


//-------------------------------------------------------------------


console.log("\n\n<ROMAN TO INTEGER>");
console.log("using Map:");
let s = "MMMCMLXXXVII"

function romanToInteger(s) {
    const Roman = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50], 
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    // let arrRoman = ['I','V','X','L','C','D','M']
    // let res = 0
    // arrS = s.split("")

    // for (let i = 0; i < arrS.length; i++) {
    //     if (arrRoman.indexOf(arrS[i]) > arrRoman.indexOf(arrS[i+1]) || arrRoman.indexOf(arrS[i]) == arrRoman.indexOf(arrS[i+1])) {
    //         res += Roman.get(arrS[i])
    //     } else {
    //         res -= Roman.get(arrS[i])
    //     }
    // }

    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (Roman.get(s[i]) < Roman.get(s[i + 1])) {
            res -= Roman.get(s[i])
        } else {
            res += Roman.get(s[i])
        }
    }

    return res
} console.log(romanToInteger(s));


console.log("using Object:");
function romanInteger(s) {
    const RomanObject = {
        M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1
    }
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (RomanObject[s[i]] < RomanObject[s[i+1]]) {
            res -= RomanObject[s[i]]
        } else {
            res += RomanObject[s[i]]
        }
    }
    return res
} console.log(romanInteger(s));


//-------------------------------------------------------------------


console.log("\n\n<INTEGER TO ROMAN>");
console.log("using Object");

let integer = 3987
function integerToRoman(integer) {
    let res = ""
    const Roman = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, III: 3, II: 2, I: 1}

    for (let keys in Roman) {
        while ( integer >= Roman[keys] ) {
            res += keys 
            integer -= Roman[keys] 
        }
    } return res
} console.log(integerToRoman(integer));


//-------------------------------------------------------------------


console.log("\n\n<PASCAL TRIANGLE>");
let numRows = 5 

function pascal(numRows) {
    let res = [[1]]

    for (let i = 0; i < numRows - 1; i++) {
        let arr = []
        arr.push(1)

        for (let j = 0; j < i; j++) {
            arr.push(res[i][j] + res[i][j+1])
        }
        arr.push(1)
        res.push(arr)

    }
    return res
}
console.log(pascal(numRows));



function pascaltriangle(numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(res[i - 1][j - 1] + res[i - 1][j]);
            }
        }
        res.push(row);
    }

    return res;
}console.log(pascaltriangle(numRows));



//-------------------------------------------------------------------


console.log("\n\n<BUY SELL STOCK>");
//find min
//slice from indexmin to length
//find max
//if not 0, return max - min
console.log("<Flexible no loop code>");
let prices = [2,4,1]

function stock(prices) {
    let priceMax = Math.max(...prices)
    let priceMin = Math.min(...prices)
    if (prices.indexOf(priceMin) > prices.indexOf(priceMax)) {
        let nSlice = prices.slice(0, prices.indexOf(priceMin))
        let nMin = Math.min(...nSlice)
        let nMax = Math.max(...nSlice)
        if (nMax > nMin) {
            return nMax - nMin
        } else {
            0
        }
    } else {
        let min = Math.min(...prices)
        let slice = prices.slice(prices.indexOf(min))
        let max = Math.max(...slice)
        if (max > min) {
            return max - min
        }  else {
            0
        }
    } 
}
console.log(stock(prices));


console.log("<Only max profit>");
function stock1(prices) {
    let min = Math.min(...prices)
    let slice = prices.slice(prices.indexOf(min))
    let max = Math.max(...slice)
    if (max > min) {
        return max - min
    } else {
        return 0
    }
}
console.log(stock1(prices));


