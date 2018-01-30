
// Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.
var dollarAmount = 5.68
console.log("Original Dollar Amount: ", dollarAmount);

var piggyBank = {quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
 }

// Your magic code here

var quartersCoins = Math.floor(dollarAmount/.25);
var remainderAmount = (dollarAmount - (quartersCoins * .25)).toFixed(2);
console.log("quarters", quartersCoins);
//this should be 22 at this stage
// console.log("remaining", remainderAmount);
//this should be 0.18

var dimesCoins = Math.floor(remainderAmount/.10);
var remainderAmount = (remainderAmount - (dimesCoins * .10)).toFixed(2);
console.log("dimes", dimesCoins);
//above should be 1
// console.log("remaining", remainderAmount);

var nickelsCoins = Math.floor(remainderAmount/.05);
var remainderAmount = (remainderAmount - (nickelsCoins * .05)).toFixed(2);
console.log("nickels", nickelsCoins);
//above should be 1
// console.log("remaining", remainderAmount);

var penniesCoins = Math.floor(remainderAmount/.01);
var remainderAmount = (remainderAmount - (penniesCoins * .01)).toFixed(2);
console.log("pennies", penniesCoins);
//above should be 3
console.log("remaining", remainderAmount);
//this should be ZERO

var piggyBank = {quarters: quartersCoins,
    dimes: dimesCoins,
    nickels: nickelsCoins,
    pennies: penniesCoins
 }

console.log("These are the coins in my piggy bank: ", piggyBank);

// That should produce the following output.

// {
//   quarters: 0,
//   dimes: 1,
//   nickels: 0,
//   pennies: 0
// }