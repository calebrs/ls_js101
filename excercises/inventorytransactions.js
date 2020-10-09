/*
**problem**
input: transactions array of objects, and an ID number that corresponds to a key in the transactions object
output: all of the transactions that match the input ID number as an array containing objects
explicit: gets the transactions for the input ID
implicit: the return is an array of objects 

**examples**
see examples in the code

**data structures**
input array of objects
output array of objects
ID: number
iterate through arrays
iterate through objects

**algorithm**
create empty result array
iterate through the transaction array
if the element/object id is equal to the user input id
push that object to the result array
return the result array

*/
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];
                     
function transactionsFor(ID, transactions) {
  let filterFunction = object => object['id'] === ID;
  return transactions.filter(filterFunction);
}

function isItemAvailable(ID, transactions) {
  let selectedSelections = transactionsFor(ID, transactions);
  let inventoryTotal = selectedSelections.reduce((accum, object) =>
    object.movement === 'in' ?
    accum += object.quantity : accum -= object.quantity
    , 0);
  
  return inventoryTotal > 0;
}



console.log(isItemAvailable(103, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

//console.log(transactionsFor(102, transactions));
// [ { id: 102, movement: 'out', quantity: 17 }
// { id: 102, movement: 'out', quantity: 15 }
// { id: 102, movement: 'out', quantity: 15 } ]