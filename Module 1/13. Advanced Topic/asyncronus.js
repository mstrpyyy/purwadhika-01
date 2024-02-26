//Synchronus vs Asyncronus
//Syncronus
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

//Asyncronus  |  If task 2 takes a longer time, we allow task 3 to be executed before task 2
console.log("Task 1");
setTimeout(() => console.log("Task 2"), 1000)
console.log("Task 3");