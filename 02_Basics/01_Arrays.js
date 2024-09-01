// Arrays - js arrays can contain multiple datatypes
// const myArr = [1,2,3,4,5,6,"23",true]

const myArr = [1,2,3,4,5,6]

const MyHeroes = ["Smudgey","Starcy"]

// const myArr2 = new Array(1,2,3,4) // prototypes of array - using this in brow

// console.log(myArr[0]); //Accessing the element

//shallow copy (arrays) - properties share same reference, changes made are reflected in the original
//deep copy- vice versa

// myArr.push(6)       //Inserting an element into array
// myArr.pop()         //Removes last element
// myArr.unshift(100)  //Add the value passed at index - 0
// myArr.shift()       //Removes the value added by unshift

// console.log(myArr.includes(9));     // T or F
// console.log(myArr.indexOf(9));      // index (if present), else -1

const newArr = myArr.join()

//join & converts the array into string
// console.log(newArr)         
// console.log(typeof newArr)
// console.log(myArr) 

// Slice, Splice
console.log("A ", myArr)
const myn1 = myArr.slice(1,3)  //3 not included

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)  //3 is included in splice & the whole string is removed from the orig Array
console.log("C ", myArr)        //1, 5, 6
console.log(myn2);              //2, 3, 4