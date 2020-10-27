/*
**Problem**
input: one string that contains numbers and string commands
output: an action that depends on what command was called:

n/number:
In: number
output:place number in the register

push
input register
place number on stack

ADD
in: rgister
output: register + stack.pop()

...


**Examples**

**Data Structures**
string input break into array
iteration
numbers

**Algorithm**
create array of commands
iterate through the array from the beginning
if the string converted to a number is a number execute the n command
if the string is a command => execture the command that accompanies it
result of each command is returned as a number


*/

function minilang(stringCommand) {
  let register = 0;
  let stack = [];
  let commandArray = stringCommand.split(' ');
  
  for (let index = 0; index < commandArray.length; index += 1) {
    if (Number(commandArray[index])) {
      register = Number(commandArray[index]);
    } else {
      switch (commandArray[index]) {
        case 'PUSH': stack.push(register);
        break;
        case 'ADD': register += stack.pop();
        break;
        case 'SUB': register -= stack.pop();
        break;
        case 'MULT': register *= stack.pop();
        break;
        case 'DIV': register = Math.floor(register / stack.pop()); //???
        break;
        case 'MOD': register %= stack.pop(); //???
        break;
        case 'POP': register = stack.pop(); //???
        break;
        case 'PRINT': console.log(register);
        break;
      }
    }
    //return register;
  }
  
}


//console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)