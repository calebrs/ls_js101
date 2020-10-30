/*
Problem:
input: count/numbers of switches - number
output: an array of lights that are on after count passes
Rules: 
two passes
1. on the first pass, all lights are turned on
2. all of the even switches are toggled
3. all of the swithes that are multiples of 3 are toggled

Examples:
SEE CODE

Data Structures:
input: number
output: array
pushing mechanism
iteartion mechanism to iterate count number of times

Algorithm:
create lights array
Start iterating from 1 to count
if it's iteration 1 toggle the sitches on
add all of these numbers to the lights array
 ---1 2 3 4 5
 if its an even pass:
map the array
 for each element
  if the index is a multiple of 2 
    if the value equals 0 return the current elements value
    if the value equals the current value, return 0

 if it's an odd pass:
    map the array
  for each element
  if the index is a multiple of 2 
    if the value equals 0 return the current elements value
    if the value equals the current value, return 0


return the index of all the lights that are not equal to zero
*/


function lightsOn(switches) {
  let lights = [];
  for (let indx = 1; indx <= switches; indx += 1) {
    //fist pass
    if (indx === 1) {
      for (let indx2 = 1; indx2 <= switches; indx2 += 1)
      lights.push(1);
      continue;
    }

    if (indx % 2 === 0) {
      lights = lights.map((light, lightIndex) => {
        if ((lightIndex + 1) % 2 === 0) {
          if (light === 1) return 0;
          if (light === 0) return 1;
        }
      })
    }
    console.log(lights);

    if (indx % 2 > 0) {
      lights = lights.map((light, lightIndex) => {
        if ((lightIndex + 1) % 3 === 0) {
          if (light === 1) return 0;
          if (light === 0) return 1;
        }
      })
    }


  }
  
  return lights;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

//console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]