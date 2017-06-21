/**
 * Declaration and Initialization
 */

// 1. Variables name must be unique
// 2. Can begin with letters, $ (jquery) or _ (private)
// 3. Can contain number, letters
// 4. Are case sensitive
// 4. Cannot be reserved words


// Declaration and Initialization
// Declaration registers with scope
// Initialization allocates memory
var x;
var x1;
var X;
var X1;
// What value does each one of these contain? 
console.log(x);

// Assignment
// assigns a value to the variable
x = "test";
var y = 12345;
console.log(x);
console.log(y);

/**
 * HOW TO RUN JAVASCRIPT ? 
 * You need node.js, a REPL, or the JS console.
 * Alt: Phantom.js
 */

// EcmaScript6
const b;
b = 234;
const z = true;
console.log(b);
console.log(z);

// Block Scope
let a;
console.log(a);
a = "abc"
console.log(a);


var foo, bar;
foo = "myFoo";
bar = "myBar";

/**
 * Reserved word in Javascript
 */

// // data type
// string, boolean, number, null, undefined, object

// // control flow and loops
// continue, break, for, return, do, while, if, else, in
// try, catch, finally

// // declaration and instantiation
// var, let, const, new, char

// // values
// true, false,

// // others
// typeof