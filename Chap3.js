// Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
	if (a > b)
		return b
	else if (a == b)
		return 'numbers equal'
	else
		return a
}


// console.log(min(4, 7)); // 4
// console.log(min(8, 3)); // 3
// console.log(min(5, 5)); // 'numbers equal'


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

// console.log(isEven(50)); // even
// console.log(isEven(75)); // odd
// console.log(isEven(-15)); // odd

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
	let letters= string.split('');
	let bArray = [];
	for(letter of letters) {
		if (letter === 'B') {
			bArray.push(letter);
		}
	}
	return bArray.length
}

// console.log(countBs('BBBBBB')); // 6
// console.log(countBs('Billys hungry goat Bob only eats big Bananas')); // 3