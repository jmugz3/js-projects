/**
 * STRINGS
 * Are Immutable
 */

var language = "javascript";
"javascript".length;
language.length;
language.concat("is my new favorite thing");
console.log(language);
console.log(language.concat(" is my new favorite thing"));

var last2 = language.substring(language.length - 2);
console.log(last2);
console.log(`language.charAt(0): ${language.charAt(0)}`);
console.log(`language.charAt(language.length): ${language.charAt(language.length)}`);
console.log(`language.charAt(language.length - 1): ${language.charAt(language.length - 1)}`);

// print half the word, then the other half
console.log(language.substring(language.length // 2))


/**
 * NUMBERS
 * No distinction between floats and integers
 */
var score = 850;
var percentage = 98.99;
console.log(typeof(score));
console.log(typeof(percentage));
console.log( typeof(score) == typeof(percentage) );

/**
 * Null
 */


/**
 * undefined
 */

/**
 * boolean
 */

/**
 * Objects
 */