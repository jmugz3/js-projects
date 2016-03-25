//cat file | wc -l
var path = process.argv[2];
var fs = require('fs');

fs.readFile(path, 'utf-8',function(err, data){
  if (err) throw err;
  //var test = data.split('\n');
  console.log(data.split('\n').length - 1);
});
