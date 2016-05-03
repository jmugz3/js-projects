'use strict';

module.exports = function duckCount(){
    
    var args = Array.prototype.slice.call(arguments);
    
    var filtered = args.filter(function (item){
        return Object.prototype.hasOwnProperty.call(item, 'quack');
    });
    
    return filtered.length;
}