
/*
0. Basic JavaScript Input/Output
--------------------------------
*/
// Output to the browser console (for debugging)
console.log("Hello from JavaScript!");
// Show a popup alert box
// alert("This is an alert box!");
// Get user input with prompt (returns a string)
// let userName = prompt("What is your name?");
// console.log("User entered:", userName);
// Show a confirmation dialog (returns true/false)
// let isSure = confirm("Are you sure?");
// console.log("User confirmed:", isSure);

// ---

/*
JavaScript Basics: Variables and Data Types
-------------------------------------------
*/

// 1. What is JavaScript?
// JavaScript is a versatile, high-level programming language used to make web pages interactive.
// It can be run in browsers and on servers (Node.js).

/*
2. Variables
Variables are containers for storing data values. In JavaScript, you can declare variables using var, let, or const.
*/
// var: Function-scoped, can be redeclared and updated.
var a = 10;
var a = 20; // Redeclaration allowed
a = 30;     // Update allowed

// let: Block-scoped, cannot be redeclared in the same scope, but can be updated.
let b = 15;
b = 25;     // Update allowed
// let b = 35; // Error: Cannot redeclare in the same scope

// const: Block-scoped, cannot be redeclared or updated (must be initialized at declaration).
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable

/*
3. Naming Rules
 - Can contain letters, digits, $, and _
 - Cannot start with a digit
 - Case-sensitive
 - Reserved words not allowed (e.g., let, var, if, etc.)
*/

/*
4. Data Types
JavaScript is a dynamically typed language (variable types are determined at runtime).
*/

// Primitive Data Types:
// a) Number
let num = 42;
let price = 99.99;
let negative = -10;

// b) String
let name = "Alice";
let greeting = 'Hello, world!';
let multiline = `This is
a template string`;

// c) Boolean
let isActive = true;
let isComplete = false;

// d) Undefined
let notAssigned;
// notAssigned is undefined

// e) Null
let emptyValue = null;

// f) Symbol (unique and immutable)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
// sym1 !== sym2

// g) BigInt (for large integers)
let bigNumber = 1234567890123456789012345678901234567890n;


/* Non-Primitive Data Types (Objects):

a) Object
    Objects are collections of key-value pairs. Keys are strings (or Symbols), values can be any type.
    Objects are used to represent real-world entities and store structured data.
*/

// Creating an object using object literal
let person = {
    name: "Bob",           // property (key: value)
    age: 25,
    isStudent: false,
    address: {
        city: "Delhi",
        pin: 110001
    },
    greet: function() {    // method (function property)
        console.log("Hello, my name is " + this.name);
    }
};


// Accessing properties

console.log(person.name);         // Dot notation
console.log(person["age"]);      // Bracket notation
console.log(person.address.city); // Nested object


// Modifying properties

person.age = 26;
person["isStudent"] = true;

// Adding new properties
person.gender = "male";


// Deleting a property

delete person.isStudent;

/*
Calling a method
*/
person.greet();

// Looping through object properties
for (let key in person) {
    // Exclude inherited properties
    if (person.hasOwnProperty(key)) {
        console.log(key + ":", person[key]);
    }
}

// Object methods: Object.keys, Object.values, Object.entries
console.log(Object.keys(person));   // Array of property names
console.log(Object.values(person)); // Array of property values
console.log(Object.entries(person));// Array of [key, value] pairs

// Creating objects using constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
let car1 = new Car("Toyota", "Camry");
console.log(car1.brand); // "Toyota"

// Creating objects using class syntax (ES6)
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound.");
    }
}
let dog = new Animal("Dog");
dog.speak();

// b) Array
let numbers = [1, 2, 3, 4, 5];

// c) Function
function add(x, y) {
    return x + y;
}

// 5. typeof Operator
// Use typeof to check the data type of a variable
console.log(typeof num);        // "number"
console.log(typeof name);       // "string"
console.log(typeof isActive);   // "boolean"
console.log(typeof notAssigned);// "undefined"
console.log(typeof emptyValue); // "object" (special case for null)
console.log(typeof person);     // "object"
console.log(typeof numbers);    // "object" (arrays are objects)
console.log(typeof add);        // "function"

// 6. Dynamic Typing Example
let dynamic = 10;      // number
dynamic = "now a string"; // string
dynamic = true;        // boolean

// 7. Constants and Immutability
// const only prevents reassignment of the variable identifier, not the contents of objects/arrays
const arr = [1, 2, 3];
arr.push(4); // Allowed
// arr = [5, 6]; // Error

const obj = { x: 1 };
obj.x = 2; // Allowed
// obj = { y: 3 }; // Error


/*
8. Summary Table
| Data Type  | Example           | typeof result |
|------------|-------------------|---------------|
| Number     | 42, 3.14          | "number"      |
| String     | "hello"           | "string"      |
| Boolean    | true, false       | "boolean"     |
| Undefined  | let x;            | "undefined"   |
| Null       | null              | "object"      |
| Symbol     | Symbol("id")      | "symbol"      |
| BigInt     | 123n              | "bigint"      |
| Object     | {a:1}, [1,2,3]    | "object"      |
| Function   | function(){}      | "function"    |
*/

// --- End of JS Variables & Data Types ---
