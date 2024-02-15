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



//FOR IN loop
let person = {
    name: "Frengky",
    age: 24,
}
    
for (let key in person) {
// keys
    console. log(key);                  // name, age
    // values for the keys
    console. log(person[key]);          // Frengky, 24
}



//destructing
const person1 = { name: "Budi", age: 20 };
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