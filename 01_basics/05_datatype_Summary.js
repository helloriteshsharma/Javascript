// Primite datatype -> call by value

// 7 types : String , Number, Boolean, Null, Undefined, Symbol, BigInt




const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);


// Non-primitiv datatype || Reference -> call by reference

// Array, Objects , Functions

const heros = ["shaktiman","naagraj","doga"];

const obj = {
    name:"Ritesh",
    age: 22,
}

const myFunction =  function() {
    console.log("Hello world")
}