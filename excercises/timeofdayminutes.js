function afterMidnight(timeString) {
  
  return getTimeInt(timeString) === 1440 ? 0 : getTimeInt(timeString);
  
}

function beforeMidnight(timeString) {
  
  return 1440 - getTimeInt(timeString) === 1440 ? 0 : 1440 - getTimeInt(timeString);
 
}

function getTimeInt(timeString) {
   let hours = Number(timeString.split(':')[0]);
   let minutes = Number(timeString.split(':')[1]);
   return minutes + (hours * 60);
}

console.log(getTimeInt('24:00'))

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);