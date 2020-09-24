function century(year) {
  let centuryNumber = Math.ceil(year / 100);
  let centuryString = String(centuryNumber);
  let lastTwo = centuryString[centuryString.length - 2] + centuryString[centuryString.length - 1];

  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
    return centuryString + 'th';
  }
  
  switch (centuryString[centuryString.length - 1]) {
    case '1': return centuryString + 'st';
    case '2': return centuryString + 'nd';
    case '3': return centuryString + 'rd';
    default: return centuryString + 'th';
  }
}

console.log(century(2000));