// const std1 = {
//     school: "Purwadhika",
//     program: "Web Development",
//     name: "Hernan",
//     age: 17,
// } 

class Purwadhika {
    school = "Purwadhika"

    setProfile(nilai, kunci) {
        this[kunci] = nilai
    }
}

class PurwadhikaBandung extends Purwadhika {
    location = "Bandung"
}

class PurwadhikaBSD extends Purwadhika {
    location = "BSD"
}

class WdPurwadhika extends PurwadhikaBandung {
    constructor(nama, umur) {
        super()
        this.name = nama
        this.age = umur
        this.program = "Web Development"
    }
}
class DmPurwadhika extends PurwadhikaBSD {
    constructor(nama, umur) {
        super()
        this.name = nama
        this.age = umur
        this.program = "Digital Marketing"
    }
}

const std1 = new WdPurwadhika("Hernan", 17)
const std2 = new DmPurwadhika("John", 20)
std2.setProfile("Dhika", "name")
std2.setProfile(21, "age")

console.log(std1)
console.log(std2)
// console.log(std2 instanceof Purwadhika)
// console.log(std2 instanceof DmPurwadhika)
// console.log(std2 instanceof WdPurwadhika)