// const tryPromise =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false
//         if (success) {
//             resolve('success')
//         } else {
//             reject('error')
//         }
//     }, 2000)
// })

// const tryAndCatch = async () => {
//     try {
//         const result = await tryPromise
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// tryAndCatch()


// const fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const users = await response.json()
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData()

const fetchData1 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        if (users.length < 11) throw "user kurang dari sebelas"
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}
fetchData1()



