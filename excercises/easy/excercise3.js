function computeSum(array) {
  return array.reduce((accumulator, num) => num + accumulator ,0);
}

function computeProduct(array) {
  return array.reduce((accumulator, num) => num * accumulator ,0);
}

let rlSync = require('readline-sync');


let int = [1,10,3,4,4];

//let int = Number(rlSync.question("Enter an integer greater than zero: "));
let operator  = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (operator === 's') {
  console.log(computeSum(int));
} else if (operator === 'p') {
  console.log(computeProduct(int));
} else {
  console.log('Invalid Input!')
}
