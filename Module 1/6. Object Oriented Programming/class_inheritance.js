class Product {
    constructor(name) {
        this.productName = name
    }
}

class Book extends Product {
    constructor(author, page) {
        super("Book")
        this.author = author
        this.page = page
    }
}

class TereLiye extends Book {
    constructor(title, page) {
        super("Tere Liye", page)
        this.title = title
    }
}

class Hernan extends Book {
    constructor(title, page) {
        super("Hernan", page)
        this.title = title
    }
}

const buku1 = new TereLiye("Bumi", 100)
const buku2 = new TereLiye("Bulan", 120)
const buku3 = new Hernan("Kalkulus", 300)

console.log(buku1)
console.log(buku2)
console.log(buku3)

//instanceof
let tereLiye = new TereLiye()
console.log(tereLiye instanceof Book);