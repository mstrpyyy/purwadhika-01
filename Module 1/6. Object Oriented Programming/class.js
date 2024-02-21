//class & constructor
class Person {
    name = ""
    age = 0
    hobby = ""
    #password = ""

    static species = "human"

    constructor(name, age, hobby, password) {
        this.name =  name
        this.age = age ,
        this.hobby = hobby
        this.#password = password
        this.gender = "Male"
    }
    get genderType() {
        return this.gender
    }
    set genderType(gender) {
        this.gender = gender
    }
    greet() {
        return `Hello ${this.name}`
    }
    access() {
        return this.#password
    }
}

//calling
let Person1 = new Person("budi", 20, "reading a book", "asdasd")
console.log(Person1);
let Person2 = new Person("arya", 22, "code","1234234")
console.log(Person2.greet());
console.log(Person2.name);


//access modifier
    //console.Person1.#password);             //not accessible
console.log(Person1.access())                    //accessible


//getter and setter
Person1.genderType = "Female"
console.log(Person1.genderType);            //female

//static properties
console.log(Person.species)


//encapsulation
class Employee {
    constructor( ) {
    this. employeeName;
    }
    getEmployeeName() {
    return this.employeeName;
    }
    setEmployeeName(newName) {
    this.employeeName = newName;
    }
}
let employee1 = new Employee()
employee1.setEmployeeName("denisse")
console.log(employee1.employeeName);


//use of encapsulation is to add validation (getter and setter alt)
class EmployeeNew {
    constructor() {
    this.employeeName;
    }
    getEmployeeName() {
    return this.employeeName;
    }
    setEmployeeName(newName) {
    if(typeof newName !== "string") {               //validation 
    throw new Error("Name should be a string")      
    }
    this.employeeName = newName;
    }
}

let employee2 = new EmployeeNew()
employee2.setEmployeeName("Arya Hanif")                      //error 
console.log(employee2.employeeName);







