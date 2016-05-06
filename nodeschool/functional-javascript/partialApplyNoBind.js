'use strict';

var slice = Array.prototype.slice;

module.exports = function logger (ns) {
    
    return function () {
        //console.log.apply(console, [ns, slice.call(arguments)]);
        console.log.apply(console, [ns].concat(slice.call(arguments)]) );
    }
}