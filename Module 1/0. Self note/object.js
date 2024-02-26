//OBJECT
const myObj = {
    name: "Arya"
}
//calling
console.log(myObj);
console.log(myObj.name);
console.log(myObj["name"]);
console.log(typeof myObj);                              //object
console.log(typeof myObj.name);                         //string

//add and replace
myObj.age = 24                                         // 24
console.log(myObj.age);
myObj.age = 22                                         // 22
console.log(myObj.age);

//delete
delete myObj.age
console.log(myObj.age);                                 // Undefined
console.log("\n");



//-------------------------------------------------------------------------------------
//more complex object
const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "pray"],
    beverage: {
        morning: "coffee",
        afternoon: "tea"
    },

    action: function() {
        return "hello world"
    }
}
console.log(anotherObj.alive);                          //true
console.log(anotherObj.hobbies);                        //[ 'eat', 'sleep', 'pray' ]
console.log(anotherObj.hobbies[1]);                     //sleep
console.log(anotherObj.beverage.afternoon);             //tea
console.log(anotherObj.action());                       //hello world
console.log("\n");



//-------------------------------------------------------------------------------------
//using THIS to replace using object name 
const moreObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "pray"],
    beverage: {
        morning: "coffee",
        afternoon: "tea"
    },

    action: function() {
        return `Time for ${this.beverage.morning}`      //refers to the object
    }
}
console.log(moreObj.action());                          //Time for coffee
console.log("\n");



//-------------------------------------------------------------------------------------
//using OBJECT as CONSTRUCTOR of other OBJECT
const vehicle =  {
    wheels: 4, 
    engine: function() {
        return "whoosh"
    }
}

//using create()
const sportsCar = Object.create(vehicle)                //using vehicle as constructor for sportsCar
sportsCar.doors = 2

//Object INHERITANCE
sportsCar.engine = function() {return "vrooom"}
console.log(sportsCar);                                 //{ doors: 2 }
console.log(sportsCar.wheels);                          //4 (from vehicle)
console.log(sportsCar.engine());                        //vrooom
console.log(vehicle.engine());                          //whoosh
console.log("\n");



//-------------------------------------------------------------------------------------
//get KEYS and VALUES
const manUtd = {
    striker:  "Hojlund",
    midfielder: "Bruno",
    back: "Maguire"
}

//get KEYS
console.log(Object.keys(manUtd));                           //[ 'striker', 'Midfielder', 'Back' ]

//get VALUE
console.log(Object.values(manUtd));                         //[ 'Hojlund', 'Bruno', 'Maguire' ]
console.log("\n");

//check property with hasOwnProperty()
console.log(manUtd.hasOwnProperty("back"));                 //true
console.log(manUtd.hasOwnProperty("winger"));               //false
console.log("\n");



//-------------------------------------------------------------------------------------
//LOOP
for (let position in manUtd) {   
    console.log(manUtd[position]);                               // "position" is a variable for KEYS, it loop and show result for each KEY: Hojlund <br> Bruno <br> Maguire
    console.log(`on ${position}, it's ${manUtd[position]}`);     // on striker, it's Hojlund etc...
}
console.log("\n");



//DESTRUCTURING
const { striker, back } = manUtd                                // {KEYS} = object  // to get property outside of object
console.log(striker);                                           // Hojlund
console.log(back);                                              // Maguire
// console.log(midfielder);                                     // >error > ReferenceError: midfielder is not defined

//using destructuring for function
function scores() {
    return `${manUtd.striker} scores!`
}
console.log(scores({ striker }));                               //Hojlund scores!

//is the same as 

function scores1({ striker }) {
    return `${striker} scores!`
}
console.log(scores1(manUtd));                                   //Hojlund scores!
console.log("\n");                                              



//-------------------------------------------------------------------------------------
//spread operator
const objectOne = {
    name: "David",
    };
    const objectTwo = {
    email: "david@mail.com"
    };
    const finalObject = { ... objectOne, ... objectTwo};
    console.log(finalObject);                                   // { name: 'David', email: 'david@mail.com' }                           
    