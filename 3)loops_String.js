/*
loops --> to do sth again and again
for, while, do-while, for of, for in
*/
for (let count = 0; count < 5; count++) {
    console.log("Deva");
}

/*
initialization
while(condition)
{
    do some work
    updation
}
*/

/*
initialization 
do{
    do some work
    updation
}
while(condition);
*/

/*
for of --> Used to iterate over string and arrays
for (datatype element of object) {
    // code
}
*/
let str = "College";
for (let i of str) {
    console.log("i:", i);
}

/*
for in --> Used for objects (returns keys of objects)
Example: In array, it returns the index of elements
*/
const student = {
    name: "Dev",
    age: 20,
    CGPA: 7.5
};
for (let key in student) {
    console.log(key, ":", student[key]);
}

/*
let num = 65;
let user = prompt("Enter a number: ");
while (user != num) {
    user = prompt("Enter the number:");
}
when we use prompt, it returns string
*/


/*
String --> It is a sequence of characters used to represent text
*/
let str1 = "first";
let str2 = 'second';

/*
Properties: .length, indices
*/
let len = str1.length; // Returns the number of characters in the string
console.log("Length of str1:", len);

console.log("First character of str1:", str1[0]); // Access character by index

/*
Strings are immutable (cannot change individual characters)
str1[0] = 'F'; // This will not change the string
*/

/*
Template Literals
-> A way to have embedded expressions in strings
-> Written using backticks (` `)
-> Main feature: String Interpolation
Syntax: `String text ${expression} string text`
*/
let strin = `this is a string ${1 + 2}`;
console.log(strin);

/*
Escape characters: \n (new line), \t (tab space)
Escape characters are counted as one character in string length
*/
let st4 = "Deva\nGoogle";
console.log("st4 with newline:", st4);
console.log("Length of st4:", st4.length); // Output: 11

/*
String Methods: built-in functions used to manipulate a string (do not change the original string)
*/

// .toUpperCase() -> Converts string to upper case
console.log("deva".toUpperCase());

// .toLowerCase() -> Converts string to lower case
console.log("DEVA".toLowerCase());

// .trim() -> Removes whitespace from start and end
console.log("   this is a string   ");
console.log("   this is a string   ".trim());

// .charAt(idx) -> Returns character at given index
console.log("hello".charAt(1)); // Output: 'e'

// .replace(searchVal, newVal) -> Replaces first occurrence
console.log("apple apple".replace("apple", "orange")); // Output: 'orange apple'

// .replaceAll(searchVal, newVal) -> Replaces all occurrences
console.log("apple apple".replaceAll("apple", "orange")); // Output: 'orange orange'

// .concat(str2) -> Joins str2 with str1
console.log(str1.concat(str2)); // Output: 'firstsecond'

// .slice(start, end) -> Returns part of string (end not included)
console.log("abcdef".slice(1, 4)); // Output: 'bcd'

// .includes(substring) -> Checks if substring exists in string
console.log("hello world".includes("world")); // Output: true

// .split(separator) -> Splits string into array
console.log("a,b,c".split(",")); // Output: ['a', 'b', 'c']

// Practice: Count vowels in a string
let testStr = "JavaScript";
let count = 0;
for (let char of testStr.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}
console.log(`Vowels in ${testStr}:`, count);