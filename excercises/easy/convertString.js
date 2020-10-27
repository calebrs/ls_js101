function stringToInteger(string) {
  const conversionKey = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }
  
  let numArray = string.split('');
  
  if (numArray[0] === "+" || numArray[0] === '-'){
    numArray.shift();
  }
  
  let total = 0;
  let factor = 1;
  
  
  
  for (let i = numArray.length - 1; i >= 0 ; i -= 1) {
    numArray[i] = conversionKey[numArray[i]];
    total += numArray[i] * factor;
    factor *= 10;
  }
  
  if (string[0] === '-') {
    return -total;
  } 
  return total;
  
}

console.log(stringToInteger("+4321"));
console.log(stringToInteger("570") === 570);