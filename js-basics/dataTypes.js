/**
 * STRINGS
 * Are Immutable
 */

// var language = 'javascript';
// 'javascript'.length;
// language.length;
// language.concat("is my new favorite thing");
// console.log(language);
// console.log(language.concat(" is my new favorite thing"));

// var last2 = language.substring(language.length - 2);
// console.log(last2);
// console.log(`language.charAt(0): ${language.charAt(0)}`);
// console.log(`language.charAt(language.length): ${language.charAt(language.length)}`);
// console.log(`language.charAt(language.length - 1): ${language.charAt(language.length - 1)}`);

// language.substring(0, 5);
// // print half the word, then the other half
// language.substring(Math.floor(language.length/2), language.length - 1);


/**
 * NUMBERS
 * No distinction between floats and integers
 */

// const score = 850;
// const percentage = 98.99;
// typeof(score) === 'number';
// console.log( typeof(percentage));
// console.log( typeof(score) == typeof(percentage) );

/**
 * NULL
 */

// console.log(null);
// typeof(null);
// null == undefined // true
// null === undefined // false


/**
 * UNDEFINED
 */

// console.log(undefined);
// typeof(undefined);
// z === undefined; // reference error

// var t3;
// t3 == null; // true
// t3 === null; // false
// typeof(t3);
// t3 == undefined;
// t3 === undefined;


/**
 * BOOLEAN
 */

// var true;
// var false;
// var x1 = true;
// typeof(true);
// true == 1;
// false == '0';
// '' == false;
// '' == []
// !true
// !false
// !"test"
// !!"test"

/**
 * OBJECTS
 */

// const myObject = {
//   id: 1,
//   name: 'root',
//   isChildren: false,
//   leaves: [1, 1.5, !this.isChildren, this.id + 2],
// };

// console.log(myObject);
// let testObject = new Object();
// console.log(typeof testObject);

// testObject.id = 1;
// testObject.name = 'root';
// testObject.isChildren = false;
// testObject.leaves = [1, 1.5, !this.isChildren, this.id + 2];

// console.log( typeof myObject === typeof testObject);
