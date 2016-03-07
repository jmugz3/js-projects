var fs = require('fs');
var path = require('path');

module.exports = function(dir, filter, callback){

  fs.readdir(dir, function(err, list){
  if (err) return callback(err);

  var filtered_list = [];

  list.forEach(function(file){
    if (path.extname(file) === '.' + filter)
      filtered_list.push(file);
  });

  /* Instead of creating a new list, you can filter in place
  list = list.filter(function (file) {
    return path.extname(file) === '.' + filterStr
  })

  callback(null, list);
  */

  //console.log(filtered_list);
  callback(null, filtered_list);
  })
}
