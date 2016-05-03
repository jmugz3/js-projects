'use strict';


module.exports = function reduce(arr, fn, init) {
    
    return (function recursion(index, value){
        //exit before index out of range
        if (index > arr.length - 1) return value;
        return recursion(index + 1 , fn(value, arr[index], index, arr))  
    })(0, init)
   
}    