//Primitive 
// 7 types: String, NUmber, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreval = 100.3
const LoggedIn = false
const Temp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 234235050932457390475239048n


//Non-Primitive/Reference Type
// Arrays, Objects, Functions

// Arrays
const heroes = ["Dhanush", "Thalapathy Vijay", "Allu Arjun"];

// Objects
let myObj = {
    name: "Gujjar",
    age: 25,
}

// Function
const MyFunction = function(){
    console.log("Function is used here");
}

console.log(typeof bigNumber);
console.log(typeof userEmail);
console.log(typeof MyFunction);
console.log(typeof myObj);
console.log(typeof heroes);

