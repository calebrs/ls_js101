/*
**problem**
Input: an integer that represents the nth number in the fib sequence
output: the value of the fibonacci number at the input integers place.
Rules: take an integer, and calculate the fibonacci number at it's place -


**Examples**
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11,  12

**Data Structures**
input is an integer
output is an integer
use recursion

number = 6
1. 1

2. 1

3. 1 + 1 = 2

4. 2 + 1 = 3

5. 3 + 2 = 5

6. 5 + 3 = 8

**Algorithm**

*/

let fibLookUp = {};

function fibonacciRecursion(place) {
  
  if (place <= 2) {
    return 1;
  }
  
  if (!fibLookUp[place - 2]) {
    fibLookUp[place - 2] = fibonacciRecursion(place - 2);
  }
  
  return fibonacciRecursion(place - 1) + fibLookUp[place - 2];
  
}





function fibonacciProcedural(place) {
  
  let fibonacciArray = [1, 1];
  
  for (let i = 1; i < place - 1; i += 1) {
    let numToPush = fibonacciArray[i] + fibonacciArray[i - 1];
    fibonacciArray.push(numToPush);
  }
  
  return fibonacciArray[fibonacciArray.length - 1];
}

console.log(fibonacciRecursion(50));

//console.log(fibonacciProcedural(30)); // => 144