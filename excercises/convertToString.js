function integerToString(number) {
  
  const conversionKeyArray = [
    '0','1','2','3','4','5','6','7','8','9'
  ]
  
  let result = '';
  let rightNumber = 0;
  while (number > 0) {
    rightNumber = number % 10;
    number = Math.floor(number / 10);
    //convert to string
    let stringToPush = conversionKeyArray[rightNumber];
    //push to array
    result = conversionKeyArray[rightNumber] + result;
  }
  return result;
}

function signedIntegerToString(integer) {
  if (integer < 0) {
    integer = (integer * -1);
    return '-' + integerToString(integer);
  } else {
    return '+' + integerToString(integer);
  }
}

console.log(signedIntegerToString(5000));