/*
Problem:
input: two strings
output: true or false boolean: true if a portion of string1 can be rearanged to match str2.

Examples:
see code

Data Structures:
strings as inputs
iteration mechanism
conditional to check if letters from one are in the other

Algorithm:
declare two empty objects for the inputs
  create object that has letter as key and quantity as value
    iterate through the input string. on each iteration 
    if the char is not a key in the object add it to the object set to one
    if it is add one
  
iterate through the second string object 
  on each prop
  if the current property's value is not equal to the key's value of the other object
    return false
    
return true


*/

function scramble(str1, str2) {
  let obj1 = createLetterObj(str1);
  let obj2 = createLetterObj(str2);

  for (let char in obj2) {
    if (obj2[char] > obj1[char] || obj1[char] === undefined) {
      return false;
    }
  }
  return true;
}

function createLetterObj(string) {
  let newObj = {};
  for (let indx = 0; indx < string.length; indx += 1) {
    newObj[string[indx]] = newObj[string[indx]] + 1 || 1;
  }
  return newObj;
}



console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);

