/*
Problem:
input - string
output - the same string, but every other letter is capitolized

Examples: see code

Data Structures:
strings for in an output
arrays for manipulating the string

Algorithm:
make the string all lowercase
split the string into an array
iterate through the array
odd indexes get capitalized then put back into the array
return the array
*/
function staggeredCase(string) {
  let psudoIndex = 0;
  
  return string
    .split("")
    .map((char) => {
      if (char < 'A') {
        return char;
      } else if (psudoIndex % 2 === 0) {
        psudoIndex += 1;
        return char.toUpperCase();
      } else {
        psudoIndex += 1;
        return char.toLowerCase();
      }
      
      
    })
    .join("");
}


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"