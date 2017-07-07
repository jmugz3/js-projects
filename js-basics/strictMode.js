'use strict';

/**
 * Strict Mode does not allow JS to declare new variables
 * on its global if the variable is not found
 */


function taxCalculate2(){
    var x = y = 3;
}

taxCalculate2(); // y is not defined'

 


function add(numbers) {
    numbers.forEach(function(number) {
        sum +=number;  // Reference Error
    }, this);     
}

add([1,2,3]);