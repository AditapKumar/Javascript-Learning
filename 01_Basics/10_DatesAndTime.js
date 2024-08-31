// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let createdDate = new Date(2024, 0, 31); //Month starts from 0
// let createdDate = new Date(2024, 0, 31, 12, 3);
// let createdDate = new Date("2023-01-14");   //string - month starts from 1
let createdDate = new Date("11-01-2025");   
// console.log(createdDate);
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //nanoseconds time from 1970
// console.log(createdDate.getTime()); 
// console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()}` and the time is `${myDate.getTime()}`);

newDate.toLocaleString('default', {
    weekday: "long",
    month: "short",
})