let rlSync = require('readline-sync');
let end = Number(rlSync.question("Where would you like to end? "));
let start = Number(rlSync.question("Where would you like to start? "));
let count = start;

while (count <= end) {
  if (count % 2 === 0) {
    console.log(count);
  }
  count += 1;
}