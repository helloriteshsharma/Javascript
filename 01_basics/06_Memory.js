//  Stack (Primitive) , Heap (Non-Primitive)
let myName = "Ritesh Sharma";

let anotherName = myName;
anotherName = "chaiaurcode"
console.log(myName);
console.log(anotherName);


let userOne = {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email ="newuser@gmail.com"

console.log(userOne);
console.log(userTwo)