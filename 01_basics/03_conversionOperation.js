let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);


let score2 = null
console.log(typeof score);

let valueInNumber2 = Number(score2);
console.log(typeof(valueInNumber2));
console.log(valueInNumber);

let score3 = undefined
console.log(typeof score);

let valueInNumber3 = Number(score3);
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);

//  "33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log( typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn)


let isLoggedIn2 = "";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log( typeof booleanIsLoggedIn2);
console.log(booleanIsLoggedIn2)

// 1 => true ; 0 => false
// "" => false
// "hitesh" => true

let isLoggedIn3 = "ritesh";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log( typeof booleanIsLoggedIn3);
console.log(booleanIsLoggedIn3)

let someNumber = 33;
let stringSomeNumber = String(someNumber);
console.log(typeof stringSomeNumber);
console.log(stringSomeNumber);


//******************************************** Operations *************************************************

let value = 3;
let negValue =  -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%2);

let str1 = "hello";
let str2 = "Ritesh";
let str3 = str1 + str2;
console.log(str3);

console.log("1"+2);
a = 1 + "2";
console.log(a);
console.log(typeof a);
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true);
console.log(+true);

let num1 , num2 , num3;
num1 = num2 = num2 = 2+2;


let gameCount = 100;
let game = gameCount++;
console.log(game);
console.log(gameCount);