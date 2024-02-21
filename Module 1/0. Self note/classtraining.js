// // let product1 = {
// //     name: "Apple",
// //     price: 10000
// //     setPrice(harga) {
// //         this.price = price
// //     }
// // }

// class Product { // template object
//     #defaultPrice = 0
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
//     setPrice(harga) {
//         this.#defaultPrice = this.price
//         this.price = harga
//     }
//     resetPrice() {
//         this.price = this.#defaultPrice
//     }
// }

// let product1 = new Product("Apple", 10000) // { name: "Apple", price: 10000 }
// let product2 = new Product("Banana", 20000)
// let product3 = new Product("Melon", 30000)
// product1.setPrice(15000)
// product1.resetPrice()

// class Transaction {
//     cart = []
//     #total = 0

//     addToCart(item, qty) { // { name: "melon", price: 30000, qty: 2}
//         item.qty = qty
//         item.total = item.price * qty
//         this.cart.push(item)
//     }


//     getCart() {
//         this.cart.forEach((value) => {
//             this.#total += value.price * value.qty
//         })
//         this.cart.push({ total: this.#total})
//         console.table(this.cart)
//         console.log(this.#total)
//     }

// }

// const transaction = new Transaction()
// transaction.addToCart(product3, 2)
// transaction.addToCart(product2, 3)
// transaction.addToCart(product1, 4)
// transaction.getCart()


