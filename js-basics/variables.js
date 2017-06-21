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
console.log(x); // undefined
// console.log(z); // reference error and it stops
console.log(y);
console.log(this); //empty object {}, window object in browser console

// Assignment
// assigns a value to the variable
x = "test";
var y = 12345;
console.log(x);
console.log(y);
console.log(x, y);
// console.log(global); //only for node

/**
 * HOW TO RUN JAVASCRIPT ? 
 * You need node.js, a REPL, or the JS console.
 * Alt: Phantom.js
 */

/**
 * EcmaScript6 (https://es6.github.com)
 * Compatibility (https://kangax.github.io/compat-table/es6/)
 */

// // const b; // syntax error
// // b = 234; 
// const z = true;
// // console.log(b);
// console.log(z);

// Block Scope
// let a;
// console.log(a);
// a = "abc"
// console.log(a);


// var foo, bar;
// foo = "myFoo";
// bar = "myBar";
// var dog1 , dog2 = "Pluto" , "Snoopy"; // invalid in Javascript

var original = '007';
var copy = original;
console.log(copy);

original = '007-1';
console.log(copy);
console.log(original);


var original2, copy2 = original2 = '007-2';
console.log(`original2 : ${original2}`);
orignal2 = '007-fake';
console.log(`copy: ${copy}`);

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

/**
 * ES6 Feature
 */

// Destructuring
 b = {
     a: 1234,
     b: "Bentley"
 }

var { myNumber, myDog } = b; 
// console.log(`myNumber ${this.myNumber}`);
