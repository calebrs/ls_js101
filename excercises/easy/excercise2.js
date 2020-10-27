let rlSync = require('readline-sync');

let bill = Number(rlSync.question("What is the bill? "));
let tipPercent = Number(rlSync.question("What is the tip percentage? ") * .01);
let tip = (bill * tipPercent);
let total = tip + bill;

console.log(`The tip is: $${tip.toFixed(2)}`);
console.log(`The total is: $${total.toFixed(2)}`);