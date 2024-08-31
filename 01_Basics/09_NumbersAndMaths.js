const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

//Number to String & then applying string properties
console.log(balance.toString().length)
console.log(balance.toFixed(2));  //Decimal precision


// const otherNumber = 23.8967
// const otherNumber = 123.8967
const otherNumber = 1123.8967
console.log(otherNumber.toPrecision(3))


const hundreds = 1000000
console.log(hundreds.toLocaleString())    //U.S. Standards
console.log(hundreds.toLocaleString('en-IN'))       //Indian Standards

// +++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.99))
// console.log(Math.min(4, 5, 7, 1, 9, 2))
// console.log(Math.max(4, 5, 7, 1, 9, 2))

console.log(Math.random());  //Random values b/w 0 to 1
console.log((Math.random()*10) + 1); // >1
console.log(Math.floor(Math.random()*10) + 1); //Floor round-off value > 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // value>10 & floor-roundoff
// floor(0.93 * (20-10+1)) + 10