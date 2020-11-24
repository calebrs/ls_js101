/*
Problem:
input: an array of integers
output: an integer as a number
sum of the itegers on the left of the index are equal to the sum of the integers on the right
if non return -1
exclude the indexs value from the sum


Exmaples: SEE CODE


Data Structures:
iteration through array
comparison beteween sides
way to sum up each side

Algorithm:
start to iterate through the input array
  on each iteration: create a slice of the digits to the left and right
  reduce both of those arrays
  if they are equal: return the current index


return -1



*/
function findEvenIndex(arr) {
  for (let indx = 0; indx < arr.length; indx += 1) {
    let leftNumbers = arr.slice(0, indx);
    let rightNumbers = arr.slice(indx + 1); 
    let leftTotal = leftNumbers.reduce((total, num) => total + num, 0);
    let rightTotal = rightNumbers.reduce((total, num) => total + num, 0);
    if (leftTotal === rightTotal) {
      return indx;
    }
  }

  return -1;
}


console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);
