//cat file | wc -l
var fs = require('fs');
var path = process.argv[2];

//fs.readFileSync(path) //--> returns a Buffer object
//console.log(typeof(test));
var test = fs.readFileSync(path).toString();
var lines = test.split('\n')
console.log(lines.length - 1 );
