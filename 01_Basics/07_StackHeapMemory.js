// Stack(Primitve), Heap(Non-Primitive)

let MyInstagramName = "BadmashNatkhat"
let anotherName = MyInstagramName
anotherName = "BhimKiShakti"

console.log(MyInstagramName);
console.log(anotherName);

//Stack mei changes krne pe uski copy milti hai

let userOne = {
    email: "user@google.com",
    upi: "user@javascript"
}

let userTwo = userOne

userTwo.email = "mypersonal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// Heap mei changes krne pe uska reference milta hai