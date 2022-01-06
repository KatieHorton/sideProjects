

//Loop Practice



/*
Loop a Triangle

Write a loop that makes seven calls to console.log to output the following triangle:
*/

let result = '#';

for(let i = 0; i <= 6; i++) {
  console.log(`${result}\n`);
  result = `${result}#`;
  
}

/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1
to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead.
When you have that working, modify your program to print "FizzBuzz
" for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).
*/

for(let i = 1; i <= 100; i++) {

  if(i % 5 == 0 && i % 3 == 0) {
    console.log('fizzBuzz')
  }
  else if(i % 5 == 0){
    console.log('Buzz');
  }
  else if(i % 3 == 0) {
    console.log('fizz');
  }
  else console.log(i);

}

/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a chessboard.

*/

// let string = ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n'
// console.log(string);
function size(num = 1) {
  let chessBoard = (' # # # #\n# # # # \n'.repeat(num));
console.log(chessBoard);
}
console.log(size(8));


//CHAPTER3

// Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
	if (a > b)
		return b
	else if (a == b)
		return 'numbers equal'
	else
		return a
}


console.log(min(4, 7)); // 4
console.log(min(8, 3)); // 3
console.log(min(5, 5)); // 'numbers equal'


/*

Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?


// recursive something like this (excedes max call stack)

function isEven(num) {
	function find(current) {
		if (current == 0) {
			return True;
		} else if (current == 1) {
			return False;
		} else {
			return find(current -= 2)
		}
	}
	return find()
}

*/

// isEven solution

function isEven(num) {
	if (num % 2 == 0) {
		return 'Even'
	} else {
		return 'Odd'
	}

}

console.log(isEven(50)); // even
console.log(isEven(75)); // odd
console.log(isEven(-15)); // odd

/*

Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
there are in the string.
Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is
to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function

*/

function countBs(string) {

	let array = string.split('');
	let newArray = array.filter(b => {
		return b == 'B';
	})
	return newArray.length
}



console.log(countBs('BBBBBB'));
console.log(countBs('Billys hungry goat Bob only eats big Bananas'));
/* 
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/



/*console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.


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
*/
