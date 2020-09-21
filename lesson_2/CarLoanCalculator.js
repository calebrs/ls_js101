/*
Launch School: https://launchschool.com/lessons/64655364/assignments/fb1e377c 
three pieces of information (inputs):
  -LOAN AMOUNT
  -Annual percentage Rate (APR)
  -Loan Duration
functionality:
  -calculate monthly interest rate
  -calculate loan duration in months
  
  use this formula: let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  
  psuedocode:
  START
  -require readline
  -functions for redundant messaging
  
  -GET loanAmount from user
    error catching
    
  -GET annualPercentageRate from user
    -get as percent
    -convert to monthly interest rate for use in formula
    -error catching
    -(later) no interest loan?
    
  -GET Loan Duration 
    error catching
    -(later) ask user if they they want to see an esitmate for 10, 15, 20, and 30 year loans?
    
    
  do the calculation using: let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  
  display the result of the calculatiopn to the user: "monthlyPayment will be your monthly payment"
    
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}


prompt("Welcome to Car Loan / Mortgage Calculator!")

let loanAmount = readline.question(prompt('Enter the dollar amount of the loan: '));
//error catch here

let annualPercentageRate = readline.question(prompt('Enter the annual percentage rate (APR) of the loan: '));
let monthlyInterestRate = (annualPercentageRate / 12) / 100;
console.log(monthlyInterestRate);
//error catch here

let loanDuration = readline.question(prompt('Enter the duration of the the loan (in years): '));
let loanDurationMonths = loanDuration * 12;

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

prompt(`You'll have a monthly payment of ${monthlyPayment.toFixed(2)} over ${loanDuration} years.`);