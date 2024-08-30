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