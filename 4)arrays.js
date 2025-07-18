
/*
Array --> Collection of items in linear way of same type or different types but we prefer of making same datatype
Syntax: datatype(let, const, var) array_name = [elements];
*/

let marks=[1,2,3,4,5];
console.log(marks);


/*
length property
Property does return any value but method/function perform any work
*/
console.log(marks.length);


/*
We can access elements of an array using indexes
*/
console.log(marks[0]);


/*
We can update values in array, but it isn't possible in String as they are immutable
*/
marks[2]=34;


/*
Looping over an array using for of
*/
for(let i of marks)
{
    console.log("i:",i );
}


/*
Looping over an array using for in
*/
for(let i in marks)
{
    console.log("i:",marks[i]);
}


/*
Array Methods
There are two types of array methods:
    1) Which do change the original array
    2) Which don't change the original array, instead return a new array
*/


//.push() : it adds elements to end, change in existing array
marks.push(23);
console.log(marks)

//.pop(): It delete from end and return, it also change in original array 
console.log(marks.pop());

//.toString(): Convert array to string, it return new array
console.log(marks.toString());

// .concat(): join multiple arrays & return result (a new array)
// We can add concat multiple arrays together   
let marks1=[90,100];
let marks2=[9000,1000];
console.log(marks.concat(marks1,marks2));

// .unshift(): used to add elements to start of array, return new length of array 
marks.unshift(900);
console.log(marks);


// .shift(): used to delete elements from the start of array, returns the removed element
console.log(marks.shift());
console.log(marks);

// .slice(): returns a shallow copy of a portion of an array into a new array object
// Syntax: slice(startIdx, endIdx) - endIdx not included
console.log(marks.slice(0, 3)); // first 3 elements

// .splice(): changes original array (add, remove, replace)
// Syntax: splice(startIdx, deleteCount, item1, item2, ...)
// - startIdx: index to start changing the array
// - deleteCount: number of elements to remove
// - item1, item2, ...: elements to add
// Returns array of deleted elements
// Example: Remove 2 elements from index 2, and add 101, 102 at that position
console.log(marks.splice(2, 2, 101, 102));
console.log(marks);

// Add elements without removing any
marks.splice(1, 0, 77, 88); // At index 1, remove 0, add 77, 88
console.log(marks);

// Remove all elements after a certain index
let removed = marks.splice(4);
console.log("Removed elements:", removed);
console.log("Array after removing elements:", marks);

// Other useful array methods:

// .indexOf(): returns the first index at which a given element can be found, or -1 if not present
console.log([10, 20, 30].indexOf(20)); // Output: 1

// .includes(): checks if an array contains a certain value
console.log([10, 20, 30].includes(25)); // Output: false

// .reverse(): reverses the array in place
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // Output: [3, 2, 1]

// .join(): joins all elements of an array into a string
console.log(["a", "b", "c"].join("-")); // Output: 'a-b-c'

// .map(): creates a new array with the results of calling a function on every element
let squares = [1, 2, 3, 4].map(x => x * x);
console.log(squares); // Output: [1, 4, 9, 16]

// .filter(): creates a new array with all elements that pass the test
let evens = [1, 2, 3, 4, 5].filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]

// .forEach(): executes a function for each array element
["a", "b", "c"].forEach((val, idx) => {
    console.log(`Index ${idx}: ${val}`);
});

// Practice: Sum of all elements in an array
let sum = marks.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of marks:", sum);

// Note: Arrays in JS are dynamic (can grow/shrink), can hold mixed types, and are zero-indexed.