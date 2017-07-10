/**
 * Hoisting, Closure and Global Scope
 * 
 */

// CLOSURE accessing variables outside the function scope.

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

let calculator = {
    numerator: 5,
    denominator: 15,
    divide: () => {
        return this.numerator / this.denominator;
    }
}

let divExamples = {
    numerator: 12,
    denominator: 144,
}
// Both can be called on functions, which they run in the context of the first argument.
// In call the subsequent arguments are passed in to the function as they are,
// while apply expects the second argument to be an array 
// that it unpacks as arguments for the called function.
calculator.divide.call(divExamples);
calculator.divide.apply(null, [20,45]);

let maxTest = Math.max.apply(null, [12,34,56]);
console.log(maxTest);
