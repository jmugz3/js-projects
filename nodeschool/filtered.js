var dir = process.argv[2];
var filter = process.argv[3];
var fs = require('fs');
var path = require('path');

filter = '.' + filter;

fs.readdir(dir, function(err, list){
  if (err) throw err;
  //for (var i = 0; i < list.length - 1; i++){
  //  if (path.extname(list[i]) == filter)
  //     console.log(list[i]);
  //}
  list.forEach(function(file){
    if (path.extname(file) === filter)
      console.log(file);
  });



});
