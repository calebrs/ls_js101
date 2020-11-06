/*
let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

reversedNums; // => [3, 2, 1]
nums;         // => [1, 2, 3]

On line we declare a new variable 'nums' and assign it to an array which contains three numbers that are elements.
on line two we call the built-in array funtion 'slice' on the nums array with no arguments, which returns a shallow copy of the 'nums' array.
On the return value of the slice fucntion, we invoke the reverse function with no argumnents, which returns the array it was called on but in reverse order.
Line four calls the reversed?Nums variable, who's return value is an array which contains [3,2,1]
while on line 5 the nums variable is called and returns the original array that was declared on line 1 which is [1,2,3]. This demonstrates how the array.prototype.slice() functiuon can be used 
to create a copy of an array. Changes made to the copy do not effect the original array.

function union(arr1, arr2) {
  let newArray = [];
  let arrayConcat = arr1.concat(arr2);
  let arraySort = arrayConcat.sort();
  
  for (let i = 0; i < arraySort.length; i += 1) {
    if (arraySort[i] !== arraySort[i - 1]) {
      newArray.push(arraySort[i]);
    }
  }
  
  return newArray;
}

On line 15 we declare a new function called union that has two parameters, arr1, and arr2. 
on line 16 we create a new variable called 'newArray' and assign it to an empty array. 
line 17 the code calls the concat function on the variable arr1 with the argument arr2 and sets the return value of that function call to another variable called arrayConcat.
line 18 creates a new variable arraySort and assigns it to the value of arrayConcat sorted in ascending order.

line 20 starts a for loop that will loop as many times as the length of the arraySort array. Each iteration the code on lines 21 and 23 will execute. 
if the current index value on arraySort does not equal the previous value of arraySort then the current value will be pushed to the newArray variable.
After all iterations, newArray is returned to the function invocation. So in effect, this code takes two arrays, combines them, sorts them in ascending order and them removes any values that are duplicated.

What is the return value and why?

[1, 2, 3].filter(num => 'hi');

The return value of this statment is '[1,2,3]'. This is becuase when the filter function is called on the array [1,2,3] it executes the callback fuction which checks whether or not the code after the arraw (=>) evaluates to true or false.
because 'hi' is truthy, the callback function will always evaluate to true meaning that each element in the array will go into the reutrn array of the filter function invokation.
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

On line 38, the global variable greeting is assigned the string value 'Hello'.
Line 40 starts a while loop that executes lines 41 and 42 until an ending condition is met. As such, line 41 reassigns the variable greeting to the String value 'Hi'
while line 42 ends the while loop that was started on line 40. Finally, line 45 calls the console.log function with the variable greeting's value as an argument, which
will log to the console 'Hi'. This code demonstrates that when a global variable is declared it can be accessed within any block (it has global scope) in the program/document. Thus when the greeting
was reassigned within the while loop, the global variable changed to 'Hi'.

function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

How does this code demonstrate the principle of transformation?
On line 53 a new function called doubleNumbers is declared with the parameter number. 
When the function is invoked lines 54 through 64 will execute. Line 54 and 55 declare new variables that will be used in the function 
doubleNums is assigned to an empty array and counter is set to the number 0. A while loop begins on line 57 the runs the code on lines 58 and 61 over and over while
the variable counmter is less than the length of the numbers variable/parameter, becasue the counter is incremented by one on line 61, the loop will run the same number of times as the length of the array.
a new variable called currentNum is declared on line 58 and set equal to the current element of the numbers array (counter represents the index of the current element).
next, line 59 calls the built-in push function to add currentNum times two to the doubledNums. As previously mentioned, line 61 increments the counter variable by one allowing the 
the loop to run over all the elements in the array. lastly on line 64 the value of the the variable doubledNums is returned to whereever this funtion is invoked. So, in effect this function
doubles each number of the input array, places it in a new array, then returns that array. This demonstrates transformation becuase each element of the input array is altered. The input
array will have the same length as the output array.

What will the code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

the code on line 80 declares a new variable arr1 and sets it equal to an array with 5 elements, two of which are objects and three of which are numbers
the next line of code creates a shallow copy of arr1 using the slice method and sets it equal to the new variable arr2.
line 82 then reassigns the 'first' property of the first element in arr2 to the number 42.
line 83 will then log the array [{ first: 42 }, { second: "value2" }, 3, 4, 5] to the console. 
Because arr2 is only a shallow copy, nested objects still are pointers, meaning that the object in arr1 is the same object as the one in arr2. The reassignment will chnage the value 
in both arrays.

what does the following code output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

Line 96 will log false to the console. nanArray[0]'s value is NaN. The expression evaluates to false becuase NaN is not equal to NaN.

what happens if we modify a after placing it in arr?

let a = [1, 3];
let b = [2];
let arr = [a, b];

arr;

a[1] = 5;
arr;

106 returns the value of the variable arr, which is an array: [[1, 3], 2]
on line 108, the value at index 1 in array 'a' is reassigned the value 5.
the reuslt of the second arr call will be [[1, 5], 2]. even though the arr is a new variable, the array that is inside of arr still acts as a reference/pointer.
meaning that arr[0] is equal to and points to the same array as the variable 'a'.

What is the result of the following call?

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps("Paper", "rock"));

The two most inner calls resolve to "paper" and "Rock" which means the next invokatoin of rps resolves to
"Paper". Lastly the final rps invocation resolves to "Paper". The inner most invocations will get evaluated first so that that the outer invocations can have a
meaningful value it can use. 

What is the return value of map in the following code? why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

the map method gets called on the array with a callback that returns the current element in the array if the length of the string element is longer than 3 characters.
The first iteration of the callback will return undefined because no else condition is specified in the callback, and the second iteration will return 'bear'. .map
creates a new array with the return values of its callback resulting in the array: [Undefinded, 'bear']


What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

the method every returns either true or false, based on the return values of its callback function. If all the return values of the callback are true the call will be true.
If any of the values evaluate to valse, every will be false.
In this case the callback iterates through the array 
and for each iteration reassigns 'num' to num * 2. because 'every' is looking for boolean values, and each iteration returns a truthy value (which evaluates to true),
'every' will evaluate to true.

let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

How to change the value 3 to 4?

1. arr1[1][1] = 4
2. arr2[2] = 4
3. obj1[first][2][0] = 4;
4. obj2[a][a][2] = 4;

the object on line 171 contains two properties, 'a' and 'b'. 'a' contains an object with two properties, 'a' and 'b'. 'a' contains an array with three element, the third of which is 3
to access the value three and reassign it the value 4 you would use the following code: obj2[a][a][2] = 4

What is does line 192 log to the console? Why?

let rlSync = require('readline-sync');

let bill = Number(rlSync.question("What is the bill? "));
let tipPercent = Number(rlSync.question("What is the tip percentage? ") * .01);
let tip = (bill * tipPercent);
let total = tip + bill;

console.log(`The tip is: $${tip.toFixed(2)}`);


Line 192 will log the amount of money, someone ought to tip their waiter, rounded to the nearest penny.
line 185 includes the readline-sync object so the program can get input from the user.
line 187 asks the user for the dollar amount of the bill, converts it to a number then assigns it to the variable bill. 
similarly, line 188 asks the user what percent the tip is, converts it to a number then timess it by .01 converting from a percent to a decimal percent. then assigns it to the variable tippercent
afterwards, line 189 calculates the tip and assigns the tip to a variable 'tip'.
Lastly the the billtotal is calculated by adding the tip to bill then assigned to the variable total.
the console then logs the string 'The bill is: [bill amount]'. this code demonstrates that we can use the read-sync object to use user input to perform calculations


let a = 2;
let b = Math.floor(Math.random() * 2);
a *= b;

if (a = 2) {
  console.log('The value of `a` is two.');
} else {
  console.log('The value of `a` is NOT two.');
}

What line of code is the erroneous line and why?

When this code runs, the first two lines declare new variables and line 206 times' 'a' by 'b' and reassigns 'a' to the result
the error in this code occurs on line 208. the if statement will check the expression within the '()' for truthiness and in this case, 'a = 2' will always evaluate to truthy becasue 
a is being reassigned to 2. Meaning that the code within the else statement curly brackets will never get executed. The writer of this code likely meant to use an equality operator '===' or '==' instead of '='. 


let foo = 1;
function bar() {
  let xyz = 3;
  const qux = 5;
  return qux;
}

const yam = function() {};
bar();

Given the following code, which names are in scope after the last line executes but before the program ends? why?

After the last line executes, the variables foo, bar(), and yam are in the programs scope. variables xyz, qux, are not becuase they only have function scope.

function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 0;

  do {
    candidate++;
    numbers.push(candidate);
  } while (candidate < upperLimit);

  return numbers;
}

lessThan(5)

What does the following function invocation return?

When lessThan is invoked, it will return the array: [1, 2, 3, 4, 5]. after the variables
'numbers' and candidate are declared, a do... while loop begins on line 239. 
On the first pass 0 will increment to 1 and be pushed into the numbers array
then line 242 checks if the candidate variable has a value less than the upper limit
This will continue four more times. Becuase candidate is incremented by one
at the beginning of the loop, 5 will also be added to the array even though the 
stopping condition of the do... while loop is that candidate is greater thant he upper limit

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);

What is the return value of the last line of this code?

The return value of the function invockation on line 272 is an array: [4, 4, 12]. This is because on the first iteration of the foreach loop on line 262
the first element is removed and the length of the array is reduced to 10. the second iteration will then look at index one which is now '4'. '4' gets pushed to the evens array
then the first element is removed again. the thrid iteration looks at index 3 which is now the value '4'. This pattern continues, skipping more of the digits in the array until 12
is read and then pushed into the evens array. This demonstrates what happens when you alter the array length while iterating through its elements, and is considered bad practice.

What does the following line of code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

When we log the value of the variable 'object' to the console, the console displays the object { first: [1, 2] }
This is because numArray references the array that is assigned to the 'first' property inside of 'object'. Which means that
if numArray is mutated like it is in line 285, if will also be altered inside of 'object'. numArray references the same array as object['first'] does.
This demonstrates how variables that are assigned to objects, act as references, or pointers in Javascript.



*/

