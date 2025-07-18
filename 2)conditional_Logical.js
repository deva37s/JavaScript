/*
Comments
This is a multiline 
comment
*/

/*
Operators -->
Arithmetic Operator:
    +(addition), -(subtraction), *(multiplication), /(division)
*/
let a=5;
let b=2;
console.log("a+b is: ",a+b);
console.log("a-b is: ",a-b);
console.log("a*b is: ",a*b);
console.log("a/b is: ",a/b);

/*
Modulus operator (%) gives back the remainder 5%2=1
*/
console.log(a%b);

/*
Exponential (**)   a**b means a to the power b
*/
console.log(a**b);

/*
Increment operator(++) and decrement operator(--) (Unary Operator)
    post increment & decrement  (a++ & a--)
    pre increment & decrement (++a & --a)
*/

console.log(a++);
console.log(a--);
console.log(a);

/*
Assignment Operators (=, +=, -=, *=, %=, **=)
*/

/*
Comparison Operators (==, ===, !=, !==, <, <=, >, >=)
    ==   : checks if the value of two variables are same
    ===  : checks if the value and datatype of two variables are same
    !=   : checks if two variables are not equal
    !==  : not equal to & type
    <, <=, >, >= : comparison operators
*/
let c="5";
console.log(a==c);
console.log(a===c);
console.log(a!=b);
console.log(a!==c); // a and c are equal but their types are not same (a= integer & c=string)

/*
Logical Operators (&&, ||, !) - binary operators except !
    && --> returns true only if both statements are true
    || --> returns false only if both statements are false
    !  --> returns negation of statement (!true = false)
*/
console.log("!(a>b):",!(a>b));  // a>b is true 



/*
Conditional Statements: if, if-else, else-if (used for multiple condition check )
if (condition 1) {
    // runs if condition1 is true
} 
else if(condition 2) {
    // runs if condition2 is true
}
else {
    // runs if both conditions are false 
}
*/

/*
Note: we can use if condition without bracket if we only have one line to execute
*/

    if(a===5) console.log(a);

/*
Ternary Operator:  works on 3 operands
    condition ? true output : false output
*/
let age=18;
console.log(age>=18?"adult":"Not an adult");

/*
Taking input from user: we can take input from user using prompt
*/
let name=prompt("Enter your name: ");
console.log(name);
