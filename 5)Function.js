
// Function: a block of code that performs a specific task, can be invoked whenever needed
function sum(a, b) { // a and b are parameters
    return a + b;
}
let a = 4;
let b = 6;
console.log("Sum:", sum(a, b));

// Function declaration vs function expression
// Function declaration (can be called before it's defined due to hoisting)
function greet() {
    console.log("Hello!");
}
greet();

// Function expression (not hoisted)
const sayBye = function() {
    console.log("Goodbye!");
};
sayBye();

// Arrow function: compact way of writing a function, used for small codes
// Syntax: (param1, param2, ...) => { /* code */ }
const multiply = (x, y) => x * y;
console.log("Multiply:", multiply(3, 5));

// Arrow function with one parameter (no parentheses needed)
const square = x => x * x;
console.log("Square:", square(4));

// Arrow function with no parameters
const hello = () => console.log("Hello from arrow function!");
hello();

/*
// to do something with function we can store it in a variable
const function_name = (param1, param2...) => {
    // some work
}
*/



/*
forEach loop in arrays
arr.forEach(callbackFunction)
Callback function: a function to execute for each element in the array

A callback is a function that is passed as an argument to another function. It can be a variable too for which a function is defined.

function & methods:
function: a piece of code that is used to perform something
method: a function which is particularly used with objects
ex: String.toUpperCase() - here toUpperCase() is a method because it is used with String which is an object type

In JavaScript, functions can be used as parameters for other functions and can return the value of a function too
*/



let arr = [1, 2, 3, 4, 5];
// forEach: executes a provided function once for each array element
arr.forEach(function prin(val, idx, arr) {
    console.log("Value:", val, "Index:", idx, "Array:", arr);
});
// In the forEach loop, we can pass three arguments: value, index, array

// Higher Order function: A function which takes another function as a parameter or returns a function
function operateOnArray(array, operation) {
    for (let item of array) {
        operation(item);
    }
}
operateOnArray([10, 20, 30], function(x) {
    console.log("Double:", x * 2);
});



// map: works like forEach but returns a new array with the results of the callback function
let newarr = arr.map((val) => {
    return val * 3;
});
console.log("Original array:", arr);
console.log("Mapped array:", newarr);



// filter: creates a new array of elements that pass a test (returns true for a condition/filter)
let filarr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log("Filtered array (even numbers):", filarr);



// reduce: performs some operation & reduces the array to a single value. It returns that single value.
let sumArr = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array using reduce:", sumArr);

// Example: Find the maximum value in an array using reduce
let maxVal = arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
console.log("Max value in array:", maxVal);

// Function as return value (function factory)
function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}
const triple = makeMultiplier(3);
console.log("Triple of 7:", triple(7));