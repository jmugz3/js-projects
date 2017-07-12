
/**
 * CONDITIONAL , COMPARISONS, 
 * CONTROL FLOW AND LOOPS
 */

var largest = "supercalifragilistic".length > 15;
console.log(largest);
var myGroceryList = ['chicken', 'bread', 'tomatoes']
var evens = [ 2, 4, 6, 8, 10]

evens.forEach(function(element) {
    element = element + 1;
}, this);

console.log(evens);


for (var index = 0; index < array.length; index++) {
    var element = array[index];
    
}

for (var key in object) {
    if (object.hasOwnProperty(key)) {
        var element = object[key];
        
    }
}

while (condition) {
    
}

if (condition) {
    
}

if (condition) {
    
} else {
    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}


// switch does a strict comparison
var x = 10;
switch(x) {
    case "10": alert("Hello");
}