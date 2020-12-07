/*
Problem:
input: an array of strings
output: an array of all the characters that show up in all the strings in the input array

Exmaples:
seee code


Algorithm:
create common chars array
save the first element of the array

save the rest of the elements in an array
  iterate through the rest of the elements
    set check array to the element
    iterate through the chars of the first element
    on each char if the char is in check array
      splice the char out of the check element
      add the char to the common chars array

  set check array to common chars array

*/


function commonChars(arr) {
  let commonChars = [];
  let firstElem = arr[0];
  arr = arr.slice(1);

  for (let indx = 0; indx < arr.length; indx += 1) {
    let checkStr = arr[indx].split('');
    for (let firstElemIndx = 0; firstElemIndx < firstElem.length; firstElemIndx += 1) {
      let char = firstElem[firstElemIndx]
      if (checkStr.includes(char)) {
        checkStr.splice(checkStr.indexOf(char), 1);
        //console.log(checkStr);
        commonChars.push(char);
        
      }
    }
  }
  console.log(commonChars);
}




//console.log(commonChars(['a', 'b'])); // []
//console.log(commonChars(['ab', 'bc'])); // ['b']
//console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
//console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
//console.log(commonChars(['aabbaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []