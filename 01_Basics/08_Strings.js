// Defining Strings
// const name = "Adxrxrwxl"
// const repoCount = 2

// console.log(name + repoCount + " Value");  //Old Method

// //Backticks - Modern Methods - can use methods within it
// console.log(`Hello I ${name} and my repo count is ${repoCount}`);



// //Initializing string Using objects
// const gameName = new String('11viKaBadmash')
const gameName2 = new String('11vi-Ka-Badmash')

// console.log(gameName[0]);
// console.log(gameName.__proto__);   //Empty Object

// console.log(gameName.length);   //Length Method
// console.log(gameName.toUpperCase());   //Uppercase
// console.log(gameName.charAt(2));  //Value at Index
// console.log(gameName.indexOf('K'));  //Index of the value(first occurence)
 


//Get Substring
// const GameID = new String('NeerajPepsu')
// const NewString = GameID.substring(0,4)  // Don't include last value, the values at 0,1,2,3 printed
// console.log(NewString)

// //Slicing Method - can input negative values for indexing
// const AnotherString = GameID.slice(-8,4)
// console.log(AnotherString);

//Trim Method - works on white space characters + line terminators
// const newStingOne = "   Neeraj Pepsu    "
// console.log(newStingOne)
// console.log(newStingOne.trim())

//Replace, Includes
const url = "https://adxrxwxl.com/adx%20rxwxl"
console.log(url.replace('%20','-'));
console.log(url.includes('adx'));

//Splitting the String into Array
console.log(gameName2.split('-'));  // Elements will be seperated by the presence of '-'


// Practice more methods
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()