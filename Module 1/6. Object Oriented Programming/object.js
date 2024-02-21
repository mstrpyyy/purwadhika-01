//creating Object
let user = {};
let user2 = new Object();

user = {
    name: "david",
    greet() {
        return "hello"
    }
}
console.log(user.name);         //david
console.log(user["name"]);      //david
console.log(user.greet());      //hello
console.log(user);              //{ name: 'david', greet: [Function: greet] }



//add and replace
user = {
    name: "david",
    greet() {
        return "hello"
    }
}
user.city = "bandung"
console.log(user);            //{ name: 'arya', age: 22, city: 'bandung' }
user.city = "jakarta"
console.log(user);            //{ name: 'arya', age: 22, city: 'jakarta' }



//delete
delete user.city
console.log(user);            //{ name: 'arya', age: 22 }



//accessing object inside object 
user = {
    name: "david",
    person: {
        nama: "arya",
        age: 22
    }
}
console.log(user.person.name);



//optional chaining
let user1 = {}                              // a user without "address" property
user1.address                               // add address
console.log(user1.address ?. street);       // undefined but not error



//Accessing Key
user = {
    name: "david",
    person: {
        nama: "arya",
        age: 22
    }
}
console.log(Object.keys(user));
console.log(Object.keys(user.person));



//Keys and Values
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}
console. log(Object.keys(band));            //["vocals, etc.."]
console. log(Object.values(band));          //["Robert Plant, etc.."]


//FOR IN loop
for (let job in band) {
    console.log(`on ${job}, it's ${band[job]}`);                 //Robert Plant etc...
}

// on vocals, it's Robert Plant
// on guitar, it's Jimmy Page
// on bass, it's John Paul Jones
// on drums, it's John Bonham


//destructing
const person1 = { 
    name: "Budi", 
    age: 20
};
const { name, age } = person1;                  // { name, age } = { name: "Budi", age: 20 }

console.log(name);                              // Budi
console.log(age);                               // 20



//spread operator
const objectOne = {
name: "David",
};
const objectTwo = {
email: "david@mail.com"
};
const finalObject = { ... objectOne, ... objectTwo};
console.log(finalObject);                               // { name: 'David', email: 'david@mail.com' }                           


//this
const person2 = {
    firstName: "Frengky",
    lastName: "Sihombing",
    greet() {
        return `Hello ${this.firstName}`
    }
}
console.log(person2.greet());

//Inheritance
const vehicle = {
    wheels: 4,
    engine: function () {
    return "Vrroooom!";
    }
}
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);                     // {doors: 2}
console.log(truck.wheels);              // 4 
console.log(truck.engine());            // Vrroooom!

const car = Object.create(vehicle)
car.doors = 4
car.engine = function() {return "Whooosh!"}
console.log(car.engine());

const tesla = Object.create(car)
console.log(tesla.wheels);          // 4
console.log(tesla.engine());        // Whooosh!
tesla.engine = function () {
    return "Shhhh..."
}
console.log(tesla.engine());        // Shhhh...
    
