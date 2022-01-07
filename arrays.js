
// The sum of a range
// The introduction of this book alluded to the following as a nice way to
// compute the sum of a range of numbers:
//  console.log(sum(range(1, 10)));

// Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to (and
// including) end.

function range(start, end) {
    count = start;
    let newArray = [];
    while (count <= end) {
        console.log(newArray.push(count));
        count++
    }
    return newArray
}
console.log(range(1, 10));
console.log(range(-1, 20));

// Next, write a sum function that takes an array of numbers and returns
// the sum of these numbers. Run the example program and see whether
// it does indeed return 55.

function sum([...numbers]) {
    let total = 0;
    for (number of numbers) {
        total += number
    }
    return total
}
console.log('sum of numbers is: ')
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when build
// ing the array. If no step is given, the elements go up by increments
// of one, corresponding to the old behavior. The function call range(1,
// 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
// negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]

function bonusRange(start, end, step) {
    let newArray = [];

    if(start < end) {
        count = start;
        while (count <= end) {
            console.log(newArray.push(count));
            count += step
          
        }
    } else if(start > end) {
        count = end;
        while (count <= start) {
            console.log(newArray.unshift(count));
            count -= step
         
        }
    }

        return newArray
}

console.log(bonusRange(1, 10, 2));
console.log(bonusRange(5, 1, -1));