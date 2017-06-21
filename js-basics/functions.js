/**
 * Hoisting and Global Scope
 * 
 */

// All declarations hoist to the top in their scope
// Global, Local and Block


function tipCalculate(){
    price = 20;
    var tip = 20 * 0.20;
}
// calculate();
// console.log(price); //variable available in global scope
// console.log(typeof(tip)); // undefined
// console.log(tip);

///

var taxPercent = 0.07;

function calculateSubTotal(){
    console.log(this);
    var subTotal = 9.99 * taxPercent;
    console.log(`subTotal : ${subTotal}`);
}

calculateSubTotal();