//CLASS
class Coffee {
    constructor(coffeeType, coffeeSize) {
        this.type = coffeeType                          //parameter, replaced with declaration
        this.size = coffeeSize                          //parameter, replaced with declaration
        this.temp = "ice" 
        this.additional = []                              //set directly, dont need parameter
    }
    //getter and setter
    get coffeeTemp() {
        return this.temp
    }
    set coffeeTemp(coffeeTemp) {
        this.temp = coffeeTemp
    }
    //adding array property
    get coffeeAddOns() {
        return this.additional
    }
    set coffeeAddOns(add) {
        this.additional.push(add)
    }
    //result
    brew() {
        console.log(`brewing ${this.temp} ${this.size} ${this.type} coffee`)
    }
}

//new OBJECT
const coffee1 = new Coffee("Americano", "grande")       //new object, declare here

//Calling
coffee1.brew()                                          //calling all  | brewing ice grande Americano coffee                             
console.log(coffee1.type);                              //calling specific property   |  Americano

//not desirable
coffee1.temp = "hot"                                    //not desirable, dont change directly to the property
coffee1.brew()                                          //brewing ice grande Latte coffee
console.log("\n");



//-------------------------------------------------------------------------------------
//accessing property using GETTER and SETTER
coffee1.coffeeTemp = "less ice"
coffee1.brew()                                          //brewing less ice grande Americano coffee

coffee1.coffeeAddOns = "caramel sauce"
coffee1.coffeeAddOns = "whipped cream"
console.log(coffee1.coffeeAddOns);                      //[ 'caramel sauce', 'whipped cream' ]
console.log("\n");




//-------------------------------------------------------------------------------------
//use of ENCAPSULATION (GETTER and SETTER alt)
class EmployeeNew {
    constructor() {
    this.employeeName;
    }
    getEmployeeName() {
    return this.employeeName;
    }
    setEmployeeName(newName) {
    if(typeof newName !== "string") {                       //validation 
    throw new Error("Name should be a string")      
    }
    this.employeeName = newName;
    }
}

let employee2 = new EmployeeNew()
employee2.setEmployeeName("Arya Hanif")                      //error 
console.log(employee2.employeeName);                         // Arya Hanif
console.log("\n");




//-------------------------------------------------------------------------------------
//Class INHERITANCE
class specialtyCoffee extends Coffee {
    constructor(coffeeSize) {
        super(coffeeSize)
        this.type = "japanese specialty beans"
    }
    filterCoffee() {
        console.log(`our ${this.temp} ${this.type} ${this.size} is 30K`);
    }
}

const specialty1 = new specialtyCoffee("Grande")
specialty1.filterCoffee()                                   //our japanese specialty beans undefined is 30K

