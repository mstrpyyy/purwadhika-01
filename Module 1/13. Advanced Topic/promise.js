//Promise
const tryPromise =  new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false
        if (success) {
            resolve('success')
        } else {
            reject('error')
        }
    }, 2000)
})

// tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log((err)))
//     .finally(() => console.log("finally done"))


//Async Await
// const asyncWait = () => {
//     console.log("satu");
//     tryPromise
//         .then((res) => console.log(res))
//         .catch((err) => console.log((err)))
//         .finally(() => console.log("finally done"))
//     console.log("dua");
// }

// asyncWait()

const asyncAwait = async () => {
    console.log("satu");
    await tryPromise
        .then((res) => console.log(res))
        .catch((err) => console.log((err)))
        .finally(() => console.log("finally done"))
    console.log("dua");
}

asyncAwait()