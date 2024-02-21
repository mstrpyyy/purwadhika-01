function searchStr(word, search) {
    let res = []
    
    for (let i = 0; i <= word.length; i++) {
        for (let j = word.indexOf(search); j < word.indexOf(search) + search.length; j++) {
            if (word[i] == search[j]) {
                res.push(j)
            }
        }
    } return res
}

console.log(searchStr("indonesia raya", "esi"));
