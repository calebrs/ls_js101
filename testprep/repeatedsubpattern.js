/*
Problem:
input: non empty string
output: true or false boolean whethor or not the string can be created using copies of substrings

Examples:
SEE CODE

Data Structures:
strings as inputs
iteration mechanism
conditional to check if current concat is equal to the current element
concat mechanism

Algorithm:

  start iterating through the string
  create the stringcheck set to empty string
   on each element:
   a => a, aa, aaa
   ab => ab, abab
   aba
   abab
   declare current substring: from 0 index to current index + 1;
    while the check string is shorter or equal to the input strings length
      if the check equals the input return true
      concat the substring to checkstring
  
    return false if it goes all the way through

*/
function repeatedSubstringPattern(str) {
  for (let indx = 0; indx < str.length - 1; indx += 1) {
    let substringCheck = str.slice(0, indx + 1);
    let checkString = '';
    while (checkString.length < str.length) {
      checkString += substringCheck;
      if (checkString === str) {
        return true;
      } 
    }
  }
  return false;
}

console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abaababaab') === true);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);