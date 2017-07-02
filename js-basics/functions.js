/**
 * Hoisting and Global Scope
 * 
 */

// All declarations hoist to the top in their scope
// Global, Local and Block

let tip = 0.25;
function tipCalculate() {
    price = 20.00; // goes to global;
    var tip = 20 * 0.20;
    console.log(`tip : ${tip}`);
}
// tipcalculate();
tipCalculate();
// console.log(`price : ${price}`); //variable available in global scope
// console.log(`typeof(tip) : ${typeof(tip)}`); // undefined
// console.log(tip);

//

// var taxPercent = 0.07;

// function calculateSubTotal(){
//     console.log(this);
//     var subTotal = 9.99 * taxPercent;
//     console.log(`subTotal : ${subTotal}`);
// }

// calculateSubTotal();
