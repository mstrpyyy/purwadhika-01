// class train {
//     enter()
//     out()
//     showpassenger()
//     penumpang = 10
//     masinis = 1
//     setiap ada yang naik, utamakan kursi paling depan
// }

class Train {
    name = "";
    static arr = [];

    constructor(name) {
        this.name = name;
    }

    enter() {
        Train.arr.push(this.name);
    }

    out() {
        Train.arr.pop();
    }

    showPasengger() {
        console.log(Train.arr);
    }
}

let person1 = new Train("Arya");
person1.enter();

let person2 = new Train("Hanif");
person2.enter();

person1.out(); // Corrected method call

person1.showPasengger();



