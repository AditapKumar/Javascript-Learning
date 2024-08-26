const accountID = 14453
let accountEmail = "adxrwl@gmail.com"
var accountPassword = "12234"
accountCity = "Noida"
let accountState;

// accountID = 2; Not allowed

accountEmail = "bawaal@gmail.com"
accountPassword = "MoheNaPato"
accountCity = "Gurugram"

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity])  /*Tabluar form Output" 

/* Prefer not to use car, because of issue in block scope and functional scope */

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/* accountState will show as undefined*/