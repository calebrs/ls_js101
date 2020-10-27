/*
**problem**
input: array of smaller arrays. the small arrays first index is a fruit and the other is the quantity
output: a single array with the fruit printed the same amount of times as its respective quantity
explicit: change the fruit and quantity into an array of all the items on the "grocery list"
implicit:

**examples**
see test case below

**data structures**
input: array of smaller arrays. first index is string the second is quantity
output: array of strings
looping mechanism
fruit string
quantity number
pushing mechanism
repeat mechanism

**algorithm**
create emptu array for fruits
iterate through input array
get the fruit by looking at the 0 index of the array
push that fruit into the fruit array for for its quantity times
  create loop that runs quantity times
  push the first index each loop
return the fruit array

*/

function buyFruit(groceryList) {
  let fruitArray = [];
  
  for (let element = 0; element < groceryList.length; element += 1) {
    let fruit = groceryList[element][0];
    for (let count = 1; count <= groceryList[element][1]; count += 1) {
      fruitArray.push(fruit);
    }
  }
  
  return fruitArray;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));



