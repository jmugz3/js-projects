/**
 * Hoisting and Global Scope
 * Remember strict mode;
 */

function calculate(){
    price = 20;
    var tip = 20 * 1.20;
}
calculate();
console.log(price); //variable available in global scope
console.log(typeof(tip)); // undefined
console.log(tip);
