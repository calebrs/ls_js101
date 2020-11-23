/*
Problem:
input: two strings
output: true or false boolean, whther or not there is a substring that appears in both strings
rules: only substrings that are longer than one letter

Examples: see code


Data Structures:
a way to store all the substrings of a string in an array
iterate through the substring array and compare that with the other string
way to get all the substrings from both strings
boolean as output

Algorithm:
declare the substrings arrays for both strings
get the all substrings for both strings



substrings:
leading sub => hello: he - hel - hell - hello
              ello: el - ell - ello
              llo: ll - llo
              lo: lo

iterate through the string starting at count 1
  get indx 0 - (count + 1)
  push to substring array

iterate through the string
  on each iteration 
  get a slice from the current index to the end
  get all the substrings for that slice 

*/
function substringTest(str1, str2) {
  let str1Subs = allSubs(str1.toLowerCase());
  let str2Subs = allSubs(str2.toLowerCase());

  for (indx = 0; indx < str1Subs.length; indx += 1) {
    if (str2Subs.includes(str1Subs[indx])) {
      return true;
    }
  }
  return false;
}

function allSubs(string) {
  let resultArray = [];
  for (let indx = 0; indx < string.length - 1; indx += 1) {
    let newSlice = string.slice(indx)
     resultArray = resultArray.concat(leadingSubs(newSlice));
  }
  return resultArray;
}

function leadingSubs(string) {
  let leadingSubs = [];
  for (let indx = string.length; indx > 1; indx -= 1) {
    leadingSubs.push(string.slice(0, indx));
  }
  return leadingSubs;
}

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Somehting', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true);
