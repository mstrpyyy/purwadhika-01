const Obj = {
    name: "arya",
    age: 22,
    address: "Bandung"
}
let objString = JSON.stringify(Obj)
console.log(objString);
//{"name":"arya","age":22,"address":"Bandung"}
console.log(typeof objString);
//string
console.log(JSON.parse(objString));
//{ name: 'arya', age: 22, address: 'Bandung' }