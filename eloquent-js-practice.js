/*console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
*/

let numArray = [];
let accumulator = 0;


function sum(numArray) {
  return numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function range(start, end) {
    for(let i = start; i <= end; i++)
    console.log(numArray.push(i));
    console.log(sum(numArray));
}

console.log(sum(range(1, 10)));
