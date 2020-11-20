/*
Problem:
input: an array of strings
output: an array of all the characters that show up in all the strings in the input array

Exmaples:
seee code


Algorithm:
take the first element of the input array
  aplit it into an array and save it as a variable

iterate through the rest of the input array starting at index 1
  on each iteration iterate the through the string
    on each char check if the char is containded within the original array if it is continue
    if its not splice that character out of the saved array

b, e, l, l, a

label => l, a, b, e, l
roller => r, o, l, l, e, r

count how many of the current char are in both array, 
  if they're equal

  algorithm2
  iterate over the first element in the array
    add it to a new object with the letter as a key and the count as a value
  
  iterate through the rest of the input array
    on each string iterate over the characters get the count of how many of those chars are in that string
    if the current char exists in the object and
    if the count of the current char is the same as the value
     add it to the results array 

  
  get count of char in string:
    input string and char
    iterate through string
    if the current char equals the input char add one to the counter
  
  return the count
*/


function commonChars(arr) {
  let checkArray = arr[0].split('');
  let resultArray = []; 

  for (let indx = 1; indx < arr.length; indx += 1) {
    for (let indx2 = 0; indx2 < checkArray.length; indx2 += 1) {
      //console.log(resultArray);
      if (arr[indx].includes(checkArray[indx2])) {
        continue;
      } else {
        resultArray.push(checkArray[indx2]);
        checkArray.splice(indx2, 1);
      }
    }
  }
  console.log(resultArray);
  return checkArray;
}




//console.log(commonChars(['a', 'b'])); // []
//console.log(commonChars(['ab', 'bc'])); // ['b']
//console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
//console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
//console.log(commonChars(['aabbaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []