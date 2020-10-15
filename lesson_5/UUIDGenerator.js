/*
**problem**
input: no input
output: a string UUID in a 8-4-4-4-12 pattern

**examples**
see code below

Data structures
result is a string
randomly generat a hexadecimal number and assign it.
return the number in a concatenated string
*/

const HEXADECIMAL_ARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


function generateUUID() {
  let UUID_8_Digits = createRandomHexadecimal(8);
  let UUID_4_Digits1 = createRandomHexadecimal(4);
  let UUID_4_Digits2 = createRandomHexadecimal(4);
  let UUID_4_Digits3 = createRandomHexadecimal(4);
  let UUID_12_Digits = createRandomHexadecimal(12);
  
  return `${UUID_8_Digits}-${UUID_4_Digits1}-${UUID_4_Digits2}-${UUID_4_Digits3}-${UUID_12_Digits}`;
}


function createRandomHexadecimal(numberOfDigits) {
  let resultHex = '';
  
  for (let i = 0; i < numberOfDigits; i += 1) {
    let randomHex = HEXADECIMAL_ARRAY[Math.floor((Math.random() * 16))];
    resultHex += randomHex;
  }
  
  return resultHex;
}


console.log(generateUUID());